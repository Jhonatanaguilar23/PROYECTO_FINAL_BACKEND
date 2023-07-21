"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
//CONSULTAR USUARIOS
export const consultUsers = async(req: Request, res: Response) => {
    const users = await User.findAll()

    
    res.status(200).json({
        msg: 'Consultar Usuarios',
        users
    })
};*/
/*
//CONSULTAR USUARIOS POR ID
export const consultUserById = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const user = await User.findByPk(id);

    res.status(200).json({
        user
    })
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
    try {
        
        const { names, email, password, state, idRol } = req.body;
    
        const user = await User.create({ names, email, password, state, idRol });
    
        res.status(200).json({
            msg: `Se ha registrado el Usuario con el ID: ${user.dataValues.id}`
        })
        
    } catch (error) {
        //httpError(res, error)
    }
    
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



//ELIMINAR USUARIOS
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
*/ 
