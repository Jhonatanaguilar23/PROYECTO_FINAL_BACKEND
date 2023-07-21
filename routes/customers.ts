import { Router } from 'express';
import {saveCustomers, updateCustomers, consultCustomers,consultCustomerById, deleteCustomers } from '../controllers/customers';

import { validateCreateCustomers, validateUpdateCustomers } from '../validators/customers';
import validateJWT from '../helpers/validate-jwt'

const router = Router();



router.get('/consultCustomers',  consultCustomers);

router.get('/consultCustomers/:id',  consultCustomerById);

router.post('/saveCustomers',  validateCreateCustomers, saveCustomers);

router.put('/updateCustomers',  validateUpdateCustomers, updateCustomers);

router.delete('/deleteCustomers/:id',  deleteCustomers);




//codigo para arrojar mensaje de error si las rutas no estan bien definidas
router.get('*', function (req , res) {
    res.status(404).json ({
        msg: 'Error 404 page not found'
    })
})



export default router;