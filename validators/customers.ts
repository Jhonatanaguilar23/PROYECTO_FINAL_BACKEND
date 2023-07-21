import { Request, Response, NextFunction } from 'express';
import { body, check, validationResult } from 'express-validator';



//VALIDACION - CREAR CLIENTES
export const validateCreateCustomers = [
    
    check('createByIdUser')
        .exists()
        .not()
        .isEmpty().withMessage('Se requiere el Id de quien se encuentra realizando el registro')
        .isNumeric().withMessage('El id debe ser de valor númerico'),

    check('names')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    
    check('phone')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el telefono del cliente')
        .isNumeric().withMessage('debe ser de valor númerico'),



  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]


//VALIDACION - ACTUALIZAR CLIENTES
export const validateUpdateCustomers = [
    check('id')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el id del cliente a modificar')
        .isNumeric().withMessage('debe ser de valor númerico'),        

    check('names')
        .exists()
        .not()
        .isEmpty().withMessage('Por favor ingrese el nombre del cliente')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    
    check('phone')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el telefono del cliente')
        .isNumeric().withMessage('debe ser de valor númerico'),



  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]