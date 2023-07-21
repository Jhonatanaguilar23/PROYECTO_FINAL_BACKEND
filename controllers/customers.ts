import { Request, Response } from 'express';
import Customer from '../models/customer';


//REGISTRAR CLIENTE
export const saveCustomers = async (req: Request, res: Response) => {
    const { createByIdUser, names, emailCustomer, phone, address } = req.body;

    const customer = await Customer.create({ names, emailCustomer, phone, address, createByIdUser});

    res.status(200).json({
        msg: `Se ha registrado el Cliente con el ID: ${customer.dataValues.id}`
    })
};



//ACTUALIZAR CLIENTE
export const updateCustomers = async (req: Request, res: Response) => {
    const { id, names, emailCustomer, phone, address, createByIdUser } = req.body;

    const customer = await Customer.update({ names, emailCustomer, phone, address, createByIdUser}, {  
        where: {
            id          //se actualiza por el id
        }
    });

    res.status(200).json({
        msg: `El Cliente con el ID: ${id} ha sido actualizado`
    })
};



//CONSULTAR CLIENTES
export const consultCustomers = async (req: Request, res: Response) => {
    
    const customer = await Customer.findAll();
    
    res.status(200).json({
        msg: 'Consultar Clientes',
        customer,
    })
};



//CONSULTAR CLIENTES POR ID
export const consultCustomerById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const customer = await Customer.findByPk(id);

    if (customer) {
        res.status(200).json({
            customer
        })
    } else {
        res.status(404).json({
            msg: `El Cliente no existe`
        })
    }
};


//ELIMINAR CLIENTE
export const deleteCustomers = async (req: Request, res: Response) => {
    const { id } = req.params;

    await Customer.destroy({
        where: {
            id
        }
    });   

    res.status(200).json({
        msg: `El Cliente con el ID: ${id} ha sido eliminado`
    })
};
