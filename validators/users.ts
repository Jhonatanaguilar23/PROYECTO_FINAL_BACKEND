import { Request, Response, NextFunction } from 'express';
import { body, check, validationResult } from 'express-validator';



//VALIDACION - CREAR USUARIOS
export const validateCreateUser = [
    
    check('names')
        .exists()
        .not()
        .isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    
    check('email')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un correo electronico')
        .isEmail().withMessage('Formato de correo invalido'),
    
    check('password')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar una contraseña')
        .isLength({ min: 5 }).withMessage('La contraseña debe tener minimo 5 caracteres'),

    check('state')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un estado (activo/inactivo)')
        .isNumeric().withMessage('El estado debe ser de valor númerico'),
            
    check('idRol')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un rol')
        .isNumeric().withMessage('El idRol debe ser de valor númerico'),
            
     check("createdByRol")
        .exists()
        .not()
        .isEmpty().withMessage('Identifique su Rol')
        .isNumeric().withMessage('Indique su Rol en valor númerico')
        .custom((value, { req }) => {
            if (value == 2) {
                throw new Error('Los gestores no pueden registrar cuentas de usuario.')                
            } if (value < 1 ) {
                throw new Error('Rol no identificado.')
            } if (value > 2 ) {
                throw new Error('Rol no identificado.')
            } 
            return true
        }),
    


  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

//VALIDACION - ACTUALIZAR USUARIOS
export const validateUpdateUser = [
    
    check("id")
        .exists()
        .not()
        .isEmpty().withMessage('El id a modificar es requerido'),

    check('names')
        .exists()
        .not()
        .isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 3 }).withMessage('Debe tener minimo 3 caracteres'),
    
    check('email')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un correo electronico')
        .isEmail().withMessage('Formato de correo invalido'),
    
    check('password')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar una contraseña')
        .isLength({ min: 5 }).withMessage('La contraseña debe tener minimo 5 caracteres'),

    check('state')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un estado (activo/inactivo)')
        .isNumeric().withMessage('El estado debe ser de valor númerico'),
            
    check('idRol')
        .exists()
        .not()
        .isEmpty().withMessage('Debe ingresar un rol')
        .isNumeric().withMessage('El idRol debe ser de valor númerico'),
            
     check("createdByRol")
        .exists()
        .not()
        .isEmpty().withMessage('Identifique su Rol')
        .isNumeric().withMessage('Indique su Rol en valor númerico')
        .custom((value, { req }) => {
            if (value == 2) {
                throw new Error('Los gestores no pueden actualizar cuentas de usuario.')                
            } if (value < 1 ) {
                throw new Error('Rol no identificado.')
            } if (value > 2 ) {
                throw new Error('Rol no identificado.')
            } 
            return true
        }),
    


  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

//VALIDACION - DELETE USUARIOS
export const validateDeleteUser = [
    
    check("id")
        .exists()
        .not()
        .isEmpty().withMessage('El id del usuario a eliminar es requerido')
        .isNumeric().withMessage('El id del usuario a eliminar debe ser numerico'),
    
    check("createdByRol")
        .exists()
        .not()
        .isEmpty().withMessage('Identifique su Rol')
        .isNumeric().withMessage('Indique su Rol en valor númerico')
        .custom((value, { req }) => {
            if (value == 2) {
                throw new Error('Los gestores no pueden eliminar cuentas de usuario.')                
            } if (value < 1 ) {
                throw new Error('Rol no identificado.')
            } if (value > 2 ) {
                throw new Error('Rol no identificado.')
            } 
            return true
        }),

    
    

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }
    next();
  }
]

