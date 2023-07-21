import { Router } from 'express';
import { addQuoteWithProducts, consultQuote, consultQuoteById, updateQuote, deleteQuote} from '../controllers/quotes';

//import {  } from '../validators/customers';


const router = Router();



router.post('/addQuoteWithProducts', addQuoteWithProducts);
router.get('/consultQuote', consultQuote);
router.get('/consultQuoteById/:id', consultQuoteById);
router.put('/updateQuote', updateQuote);
router.delete('/deleteQuote/:id', deleteQuote);






//codigo para arrojar mensaje de error si las rutas no estan bien definidas
router.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not found'
    })
})



export default router;