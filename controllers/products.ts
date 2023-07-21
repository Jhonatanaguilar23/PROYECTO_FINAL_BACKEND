import { Request, Response } from 'express';
import Product from '../models/product';
import User from '../models/user';




//REGISTRAR PRODUCTOS
export const saveProducts = async (req: Request, res: Response) => {

    const { name, description, unitValue} = req.body; 
    const user = await User.findOne({
        
    });

    //crear los registros de estos campos en la base de datos
    const product = await Product.create({ name, description, unitValue, idUser: user?.dataValues.id });

    res.status(200).json({
        msg: `Se ha registrado un nuevo producto con el ID: ${product.dataValues.id}`    //"obtiene id del producto
    });
};


//CONSULTAR TODOS LOS PRODUCTOS
export const consultProducts = async (req: Request, res: Response) => {
    
    const products = await Product.findAll();              //findAll consulta todo los datos de esa tabla
    
    res.status(200).json({
        msg: 'Consultar Productos',
        products,
    })
};


//CONSULTAR PRODUCTOS POR ID
export const consultProductById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (product) {
        res.status(200).json({
            product
        })
    } else {
        res.status(404).json({
            msg: `El producto no existe`
        })
    }
};


//ACTUALIZAR PRODUCTOS
export const updateProduct = async (req: Request, res: Response) => {
    const { id, name, description, unitValue, idUser } = req.body;

    const product = await Product.update({ name, description, unitValue, idUser}, {
        where: {
            id
        }
    });

    res.status(200).json({
        msg: `El Producto con el ID: ${id} ha sido actualizado`
    })
};


//ELIMINAR PRODUCTOS
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;                      //se elimina por id - por parametro

    await Product.destroy({
        where: {
            id          //se elimina por el id
        }
    });   

    res.status(200).json({
        msg: `El Producto con el ID: ${id} ha sido eliminado`
    })
};

