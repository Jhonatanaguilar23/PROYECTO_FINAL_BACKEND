"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateProducts = exports.validateCreateProducts = void 0;
const express_validator_1 = require("express-validator");
//VALIDACION - CREAR PRODUCTOS
exports.validateCreateProducts = [
    (0, express_validator_1.check)('name')
        .exists()
        .not()
        .isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('description')
        .exists()
        .not()
        .isEmpty().withMessage('Ingrese la descripción del producto'),
    (0, express_validator_1.check)('unitValue')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar el valor unitario')
        .isNumeric().withMessage('Debe ser valor númerico'),
    (0, express_validator_1.check)('email')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el Correo electronico de quien realiza el registro del producto'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
//VALIDACION - ACTUALIZAR PRODUCTOS
exports.validateUpdateProducts = [
    (0, express_validator_1.check)('id')
        .exists()
        .not()
        .isEmpty().withMessage('El id del producto a modificar es obligatorio')
        .isNumeric().withMessage('El ID debe ser valor númerico'),
    (0, express_validator_1.check)('description')
        .exists()
        .not()
        .isEmpty().withMessage('Ingrese la descripción del producto'),
    (0, express_validator_1.check)('unitValue')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar el valor unitario')
        .isNumeric().withMessage('Debe ser valor númerico'),
    (0, express_validator_1.check)('idUser')
        .exists()
        .not()
        .isEmpty().withMessage('Debes asignar a que rol pertenece la modificación de este producto'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
