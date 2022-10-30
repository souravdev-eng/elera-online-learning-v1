import { body } from 'express-validator';

export const courseCreateValidation = [
  body('title').not().isEmpty().withMessage('Course must have a title'),
  body('image').not().isEmpty().withMessage('Course must have a poster image'),
  body('price')
    .isFloat({ gt: 299, lt: 1000000 })
    .withMessage('Course must have a price under 299-1000000'),
  body('category').not().isEmpty().withMessage('Course must have a category'),
  body('aboutCourse')
    .isLength({
      max: 1500,
    })
    .withMessage('Course must have a small details under 1500 characters'),
  body('introVideo').not().isEmpty().withMessage('Course must have a introVideo'),
  body('durationHours').not().isEmpty().withMessage('Course must have a duration'),
  body('originalPrice')
    .isFloat({
      gt: 299,
      lt: 1000000,
    })
    .withMessage('Course must have a original price under 299-1000000'),
  // body('creatorId').not().isEmpty().withMessage('creatorId must be provided'),
  // .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
];
