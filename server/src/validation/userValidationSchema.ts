import { body } from 'express-validator';

export const userSignUpValidation = [
  body('email').isEmail().withMessage('Email must be valid').not().isEmpty(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];
