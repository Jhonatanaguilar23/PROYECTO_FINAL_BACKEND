import { Request, Response, } from "express";
import bcrypt from 'bcryptjs';
import Rol from '../models/roles'
import User from "../models/user";




//CONSULTAR USUARIOS
export const consultUsers = async(req: Request, res: Response) => {  
    
    const users = await User.findAll({
        attributes: ['id', 'names', 'email', 'password', 'state',  'idRol', 'createdByRol' ], //lo que deseo que me muestre
         include: [{
             model: Rol,                        //mostrar el rol del usuario
             attributes: ['description']        //mostrar solo la descripcion del rol
         }],
        where: {
            state: 1    //siempre y cuando esten activos
        }
    });
    
    res.status(200).json({
        msg: 'Consultar Usuarios',
        users
    })
};



//CONSULTAR USUARIOS POR ID
export const consultUserById = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const user = await User.findByPk(id);

    
    if (user) {
        
        res.status(200).json({
            user
        })
        
    } else {
        res.status(404).json({
            msg: 'El usuario no existe'
        })
    };
};


//CONSULTAR USUARIO POR NOMBRE
export const consultUserByNames = async (req: Request, res: Response) => {

    const { names } = req.params;
    const user = await User.findAll({
        where: {
            names
        }
    });
 
    res.status(200).json({
        user    
    })
};


//CREAR USUARIOS
export const saveUsers = async(req: Request, res: Response) => {
       
    let { names, email, password, state, idRol, createdByRol } = req.body;

    //Encriptar la contraseña
    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password, salt);

    const user = await User.create({ names, email, password, state, idRol, createdByRol });
       
    res.status(200).json({
               msg: `Se ha registrado el Usuario con el ID: ${user.dataValues.id}`
    })
}



//ACTUALIZAR USUARIOS
export const updateUser = async (req: Request, res: Response) => {
    const { id, names, email, password, state, idRol } = req.body;

    const user = await User.update({ names, email, password, state, idRol }, {
        where: {
            id
        }
    });

    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido actualizado`
    })
};



//ELIMINAR USUARIOS POR BODY

/*export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.body;

    const user = await User.destroy({
        where: {
            id
        }
    });

    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido eliminado`
    })
};*/

//ELIMINAR USUARIOS POR PARAMETRO
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    await User.destroy({
        where: {
            id
        }
    });   

    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido eliminado`
    })
};

//ELIMINAR USUARIO CAMBIANDO SU ESTADO A INACTIVO
/*export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const state = 0;
    await User.update({ state }, {
        where: {
            id
        }        
    });

    res.status(200).json({
        msg: `El Usuario con el ID: ${id} ha sido eliminado`
    })
};*/