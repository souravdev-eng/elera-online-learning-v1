import admin from 'firebase-admin';
// @ts-ignore
import * as serviceAccount from './serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export { admin };
