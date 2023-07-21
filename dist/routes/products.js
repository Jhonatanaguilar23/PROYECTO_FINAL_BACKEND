"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const router = (0, express_1.Router)();
router.post('/saveProducts', products_1.saveProducts);
router.get('/consultProducts', products_1.consultProducts);
router.get('/consultProducts/:id', products_1.consultProductById);
router.put('/updateProduct', products_1.updateProduct);
router.delete('/deleteProduct/:id', products_1.deleteProduct);
//codigo para arrojar mensaje de error si las rutas no estan bien definidas
router.get('*', function (req, res) {
    res.status(404).json({
        msg: 'Error 404 page not found'
    });
});
exports.default = router;
