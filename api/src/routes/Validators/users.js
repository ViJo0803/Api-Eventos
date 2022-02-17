const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')


const validateCreate = [ //TODO:name, age, email
    check('nombre')
    .isLength({ min: 3 })
    .isString()
        .exists(),
        check('apellidos')
        .isLength({ min: 3 })
        .isString()
            .exists(),
    check('telefono')
        .exists()
        .isNumeric()
        .isLength({ min: 9 })
    ,
    check('mail')
        .exists()
        .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }