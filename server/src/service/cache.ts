import mongoose from 'mongoose';
import { client } from '../app';

const exec = mongoose.Query.prototype.exec;

declare module 'mongoose' {
  interface DocumentQuery<T, DocType extends import('mongoose').Document, QueryHelpers = {}> {
    mongooseCollection: {
      name: any;
    };
    cache(): DocumentQuery<T[], Document> & QueryHelpers;
    useCache: boolean;
    hashKey: string;
  }

  interface Query<ResultType, DocType, THelpers = {}, RawDocType = DocType> extends DocumentQuery<any, any> {}
}
mongoose.Query.prototype.cache = function () {
  this.useCache = true;
  return this;
};

mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    // @ts-ignore
    return exec.apply(this, arguments);
  }
  const key = JSON.stringify(
    Object.assign({}, this.getQuery(), {
      collation: this.mongooseCollection.name,
    })
  );

  // 1 See if we have a value for 'key' in redis
  const cachedValue = await client.get(key);

  // 2 If we do, return that
  if (cachedValue) {
    const doc = JSON.parse(cachedValue);
    console.log('Serving from redis');
    return Array.isArray(doc) ? doc.map((el) => new this.model(el)) : new this.model(doc);
  }

  // @ts-ignore
  const result = await exec.apply(this, arguments);

  // 3 Otherwise, issue the query and store the result in redis

  await client.setEx(key, 5, JSON.stringify(result));
  console.log('@@@@@@@@Serving from mongo@@@@@@@@@@');
  return result;
};
