const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')


const validateCreate = [ //TODO:name, age, email
    check('nombre')
    .isLength({ min: 3 })
    .isString()
        .exists(),
        check('tipo')
        .isLength({ min: 3 })
        .isString()
            .exists(),
    check('fecha')
        .exists()
        .isDate()
        .isLength({ min: 10 })
    ,
    check('hora')
        .exists(),
        check('participantes')
        .isLength({ min: 3 })
        .isArray()
        .exists(),
       
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }