import { NextFunction, Request, Response } from 'express';
import { QUERY_FIELD } from '../../constant/queryField';
import { NotFoundError } from '../../errors';
import { Course } from '../../models';
import { APIFeatures } from '../../utils';

export const searchCourse = async (req: Request, res: Response, next: NextFunction) => {
    // const { query } = req.query;
    req.query.fields = QUERY_FIELD;
    console.log(req.query)
    const features = new APIFeatures(Course.find({
        $or: [{ title: { $regex: new RegExp(req?.query?.search as string, 'i') } }]
    }), req.query)
        .limitFields()
        .paginate();

    const courses = await features.query.cache();

    if (!courses) {
        return next(new NotFoundError("There is no course found"))
    }

    res.status(200).json({ courses });
};
