import { Request, Response } from 'express';
import Quote from '../models/quote';
import Quote_product from '../models/quote_product';


// Agregar una cotización y sus productos relacionados
export const addQuoteWithProducts = async (req: Request, res: Response) => {
  const {detail, totalPrice, idUser, idCustomers, products } = req.body;

  try {
    // Crear la cotización
    const quote = await Quote.create({      
      detail,
      totalPrice,
      idUser,
      idCustomers,
    });
      
  
    // Crear los productos relacionados a la cotización
    for (const product of products) {
      await Quote_product.create({
        idQuote: quote.dataValues.id,
        idProduct: product.idProduct,
        amount: product.amount,
        totalPrice: product.totalPrice,
      });
      }
 
    res.status(201).json({ message: 'Cotización y productos agregados exitosamente' });
  } catch (error) {
    console.error('Error al agregar la cotización y productos:', error);
    res.status(500).json({ message: 'Ocurrió un error al agregar la cotización y productos' });
  }
};


//CONSULTAR COTIZACION
export const consultQuote = async(req: Request, res: Response) => {  
    
    const quote = await Quote.findAll({
        attributes: ['id', 'detail', 'totalPrice', 'idUser', 'idCustomers'], 
            //  include: [{
            //      model: Quote_product,
            //      attributes: ['idQuote', 'idProduct', 'amount', 'totalPrice'] 
            //  }],
    });
    
    res.status(200).json({
        msg: 'Consultar Cotización',
        quote
    })
};


//CONSULTAR COTIZACION POR ID
export const consultQuoteById = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const quote = await Quote.findByPk(id);
    
    if (quote) {
        
        res.status(200).json({
            quote
        })
        
    } else {
        res.status(404).json({
            msg: 'La cotización no existe'
        })
    };
};

//ACTUALIZAR COTIZACION
export const updateQuote = async (req: Request, res: Response) => {
  const {id, detail, totalPrice, idUser, idCustomers, products } = req.body;

    const quote = await Quote.update({      
      id,
      detail,
      totalPrice,
      idUser,
      idCustomers,
    }, {
        where: {
            id
        }
    });     
 
    for (const product of products) {
      await Quote_product.update({
        idProduct: product.idProduct,
        amount: product.amount,
        totalPrice: product.totalPrice,
      }, {
          where: {
              
          }
      });
      }

    res.status(201).json({ message: 'Cotización y productos actualizados exitosamente' });
  
    
};


//ELIMINAR COTIZACION 
export const deleteQuote = async (req: Request, res: Response) => {
    const { id } = req.params;
    const quote = await Quote.findByPk(id)
        
    
    if (!quote) {
        
        res.status(404).json({
            msg: `La cotización con el ID: ${id} no existe`
        })
    
    } else {
        
        await Quote.destroy({
            where: {
                id,
            },
            
        });       
        res.status(200).json({
            msg: `La cotización con el ID: ${id} ha sido eliminada`
        })
    }
};