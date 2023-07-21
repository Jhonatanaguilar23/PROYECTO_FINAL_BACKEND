"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteUser = exports.validateUpdateUser = exports.validateCreateUser = void 0;
const express_validator_1 = require("express-validator");
//VALIDACION - CREAR USUARIOS
exports.validateCreateUser = [
    (0, express_validator_1.check)('names')
        .exists()
        .not()
        .isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('email')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un correo electronico')
        .isEmail().withMessage('Formato de correo invalido'),
    (0, express_validator_1.check)('password')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar una contraseña')
        .isLength({ min: 5 }).withMessage('La contraseña debe tener minimo 5 caracteres'),
    (0, express_validator_1.check)('state')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un estado (activo/inactivo)')
        .isNumeric().withMessage('El estado debe ser de valor númerico'),
    (0, express_validator_1.check)('idRol')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un rol')
        .isNumeric().withMessage('El idRol debe ser de valor númerico'),
    (0, express_validator_1.check)("createdByRol")
        .exists()
        .not()
        .isEmpty().withMessage('Identifique su Rol')
        .isNumeric().withMessage('Indique su Rol en valor númerico')
        .custom((value, { req }) => {
        if (value == 2) {
            throw new Error('Los gestores no pueden registrar cuentas de usuario.');
        }
        if (value < 1) {
            throw new Error('Rol no identificado.');
        }
        if (value > 2) {
            throw new Error('Rol no identificado.');
        }
        return true;
    }),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
//VALIDACION - ACTUALIZAR USUARIOS
exports.validateUpdateUser = [
    (0, express_validator_1.check)("id")
        .exists()
        .not()
        .isEmpty().withMessage('El id a modificar es requerido'),
    (0, express_validator_1.check)('names')
        .exists()
        .not()
        .isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('email')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un correo electronico')
        .isEmail().withMessage('Formato de correo invalido'),
    (0, express_validator_1.check)('password')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar una contraseña')
        .isLength({ min: 5 }).withMessage('La contraseña debe tener minimo 5 caracteres'),
    (0, express_validator_1.check)('state')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un estado (activo/inactivo)')
        .isNumeric().withMessage('El estado debe ser de valor númerico'),
    (0, express_validator_1.check)('idRol')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un rol')
        .isNumeric().withMessage('El idRol debe ser de valor númerico'),
    (0, express_validator_1.check)("createdByRol")
        .exists()
        .not()
        .isEmpty().withMessage('Identifique su Rol')
        .isNumeric().withMessage('Indique su Rol en valor númerico')
        .custom((value, { req }) => {
        if (value == 2) {
            throw new Error('Los gestores no pueden actualizar cuentas de usuario.');
        }
        if (value < 1) {
            throw new Error('Rol no identificado.');
        }
        if (value > 2) {
            throw new Error('Rol no identificado.');
        }
        return true;
    }),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
//VALIDACION - DELETE USUARIOS
exports.validateDeleteUser = [
    (0, express_validator_1.check)("id")
        .exists()
        .not()
        .isEmpty().withMessage('El id del usuario a eliminar es requerido')
        .isNumeric().withMessage('El id del usuario a eliminar debe ser numerico'),
    (0, express_validator_1.check)("createdByRol")
        .exists()
        .not()
        .isEmpty().withMessage('Identifique su Rol')
        .isNumeric().withMessage('Indique su Rol en valor númerico')
        .custom((value, { req }) => {
        if (value == 2) {
            throw new Error('Los gestores no pueden eliminar cuentas de usuario.');
        }
        if (value < 1) {
            throw new Error('Rol no identificado.');
        }
        if (value > 2) {
            throw new Error('Rol no identificado.');
        }
        return true;
    }),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
