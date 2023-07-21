"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateCustomers = exports.validateCreateCustomers = void 0;
const express_validator_1 = require("express-validator");
//VALIDACION - CREAR CLIENTES
exports.validateCreateCustomers = [
    (0, express_validator_1.check)('createByIdUser')
        .exists()
        .not()
        .isEmpty().withMessage('Se requiere el Id de quien se encuentra realizando el registro')
        .isNumeric().withMessage('El id debe ser de valor númerico'),
    (0, express_validator_1.check)('names')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('phone')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el telefono del cliente')
        .isNumeric().withMessage('debe ser de valor númerico'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
//VALIDACION - ACTUALIZAR CLIENTES
exports.validateUpdateCustomers = [
    (0, express_validator_1.check)('id')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del cliente a modificar')
        .isNumeric().withMessage('debe ser de valor númerico'),
    (0, express_validator_1.check)('names')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    (0, express_validator_1.check)('phone')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el telefono del cliente')
        .isNumeric().withMessage('debe ser de valor númerico'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }
        next();
    }
];
