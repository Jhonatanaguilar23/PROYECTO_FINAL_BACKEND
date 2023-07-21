"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuote = exports.updateQuote = exports.consultQuoteById = exports.consultQuote = exports.addQuoteWithProducts = void 0;
const quote_1 = __importDefault(require("../models/quote"));
const quote_product_1 = __importDefault(require("../models/quote_product"));
// Agregar una cotización y sus productos relacionados
const addQuoteWithProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { detail, totalPrice, idUser, idCustomers, products } = req.body;
    try {
        // Crear la cotización
        const quote = yield quote_1.default.create({
            detail,
            totalPrice,
            idUser,
            idCustomers,
        });
        // Crear los productos relacionados a la cotización
        for (const product of products) {
            yield quote_product_1.default.create({
                idQuote: quote.dataValues.id,
                idProduct: product.idProduct,
                amount: product.amount,
                totalPrice: product.totalPrice,
            });
        }
        res.status(201).json({ message: 'Cotización y productos agregados exitosamente' });
    }
    catch (error) {
        console.error('Error al agregar la cotización y productos:', error);
        res.status(500).json({ message: 'Ocurrió un error al agregar la cotización y productos' });
    }
});
exports.addQuoteWithProducts = addQuoteWithProducts;
//CONSULTAR COTIZACION
const consultQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quote = yield quote_1.default.findAll({
        attributes: ['id', 'detail', 'totalPrice', 'idUser', 'idCustomers'],
        //  include: [{
        //      model: Quote_product,
        //      attributes: ['idQuote', 'idProduct', 'amount', 'totalPrice'] 
        //  }],
    });
    res.status(200).json({
        msg: 'Consultar Cotización',
        quote
    });
});
exports.consultQuote = consultQuote;
//CONSULTAR COTIZACION POR ID
const consultQuoteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const quote = yield quote_1.default.findByPk(id);
    if (quote) {
        res.status(200).json({
            quote
        });
    }
    else {
        res.status(404).json({
            msg: 'La cotización no existe'
        });
    }
    ;
});
exports.consultQuoteById = consultQuoteById;
//ACTUALIZAR COTIZACION
const updateQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, detail, totalPrice, idUser, idCustomers, products } = req.body;
    const quote = yield quote_1.default.update({
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
        yield quote_product_1.default.update({
            idProduct: product.idProduct,
            amount: product.amount,
            totalPrice: product.totalPrice,
        }, {
            where: {}
        });
    }
    res.status(201).json({ message: 'Cotización y productos actualizados exitosamente' });
});
exports.updateQuote = updateQuote;
//ELIMINAR COTIZACION 
const deleteQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const quote = yield quote_1.default.findByPk(id);
    if (!quote) {
        res.status(404).json({
            msg: `La cotización con el ID: ${id} no existe`
        });
    }
    else {
        yield quote_1.default.destroy({
            where: {
                id,
            },
        });
        res.status(200).json({
            msg: `La cotización con el ID: ${id} ha sido eliminada`
        });
    }
});
exports.deleteQuote = deleteQuote;
