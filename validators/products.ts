import { Request, Response, NextFunction } from 'express';
import { body, check, validationResult } from 'express-validator';



//VALIDACION - CREAR PRODUCTOS
export const validateCreateProducts = [
    
    check('name')
        .exists()
        .not()
        .isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    
    check('description')
        .exists()
        .not()
        .isEmpty().withMessage('Ingrese la descripción del producto'),        
    
    check('unitValue')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar el valor unitario')
        .isNumeric().withMessage('Debe ser valor númerico'),        

    check('email')
        .exists()
        .not()
        .isEmpty().withMessage('Ingresa el Correo electronico de quien realiza el registro del producto'),



  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

//VALIDACION - ACTUALIZAR PRODUCTOS
export const validateUpdateProducts = [
    
    check('id')
        .exists()
        .not()
        .isEmpty().withMessage('El id del producto a modificar es obligatorio')
        .isNumeric().withMessage('El ID debe ser valor númerico'),
        
    check('description')
        .exists()
        .not()
        .isEmpty().withMessage('Ingrese la descripción del producto'),        
    
    check('unitValue')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar el valor unitario')
        .isNumeric().withMessage('Debe ser valor númerico'),        

    check('idUser')
        .exists()
        .not()
        .isEmpty().withMessage('Debes asignar a que rol pertenece la modificación de este producto'),



  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

