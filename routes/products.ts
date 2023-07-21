import { Router } from 'express';

import { saveProducts, consultProducts, consultProductById, updateProduct, deleteProduct } from '../controllers/products';

import { validateCreateProducts, validateUpdateProducts } from '../validators/products';
import validateJWT from '../helpers/validate-jwt'




const router = Router();

router.post('/saveProducts', saveProducts);

router.get('/consultProducts', consultProducts);

router.get('/consultProducts/:id', consultProductById);

router.put('/updateProduct', updateProduct);

router.delete('/deleteProduct/:id', deleteProduct)




//codigo para arrojar mensaje de error si las rutas no estan bien definidas
router.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not found'
    })
})


export default router;