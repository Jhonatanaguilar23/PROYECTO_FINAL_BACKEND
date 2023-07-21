"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const quotes_1 = require("../controllers/quotes");
//import {  } from '../validators/customers';
const router = (0, express_1.Router)();
router.post('/addQuoteWithProducts', quotes_1.addQuoteWithProducts);
router.get('/consultQuote', quotes_1.consultQuote);
router.get('/consultQuoteById/:id', quotes_1.consultQuoteById);
router.put('/updateQuote', quotes_1.updateQuote);
router.delete('/deleteQuote/:id', quotes_1.deleteQuote);
//codigo para arrojar mensaje de error si las rutas no estan bien definidas
router.get('*', function (req, res) {
    res.status(404).json({
        msg: 'Error 404 page not found'
    });
});
exports.default = router;
