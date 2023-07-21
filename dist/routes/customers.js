"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customers_1 = require("../controllers/customers");
const customers_2 = require("../validators/customers");
const router = (0, express_1.Router)();
router.get('/consultCustomers', customers_1.consultCustomers);
router.get('/consultCustomers/:id', customers_1.consultCustomerById);
router.post('/saveCustomers', customers_2.validateCreateCustomers, customers_1.saveCustomers);
router.put('/updateCustomers', customers_2.validateUpdateCustomers, customers_1.updateCustomers);
router.delete('/deleteCustomers/:id', customers_1.deleteCustomers);
//codigo para arrojar mensaje de error si las rutas no estan bien definidas
router.get('*', function (req, res) {
    res.status(404).json({
        msg: 'Error 404 page not found'
    });
});
exports.default = router;
