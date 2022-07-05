import { body } from 'express-validator';

export const userSignUpValidation = [
  body('email').isEmail().not().isEmpty().withMessage('Email must be valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('fullName').not().isEmpty().withMessage('Full name is required'),
];

export const userLoginUpValidation = [
  body('email').isEmail().not().isEmpty().withMessage('Email must be valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];
