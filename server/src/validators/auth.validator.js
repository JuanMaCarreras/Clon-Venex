import { check, validationResult } from 'express-validator'


export const validateSignUp = [

    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

    (req, res, next) => {

        const errors = validationResult(req)

        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()

    }

]