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
exports.deleteProduct = exports.updateProduct = exports.consultProductById = exports.consultProducts = exports.saveProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const user_1 = __importDefault(require("../models/user"));
//REGISTRAR PRODUCTOS
const saveProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, unitValue } = req.body;
    const user = yield user_1.default.findOne({});
    //crear los registros de estos campos en la base de datos
    const product = yield product_1.default.create({ name, description, unitValue, idUser: user === null || user === void 0 ? void 0 : user.dataValues.id });
    res.status(200).json({
        msg: `Se ha registrado un nuevo producto con el ID: ${product.dataValues.id}` //"obtiene id del producto
    });
});
exports.saveProducts = saveProducts;
//CONSULTAR TODOS LOS PRODUCTOS
const consultProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.findAll(); //findAll consulta todo los datos de esa tabla
    res.status(200).json({
        msg: 'Consultar Productos',
        products,
    });
});
exports.consultProducts = consultProducts;
//CONSULTAR PRODUCTOS POR ID
const consultProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.default.findByPk(id);
    if (product) {
        res.status(200).json({
            product
        });
    }
    else {
        res.status(404).json({
            msg: `El producto no existe`
        });
    }
});
exports.consultProductById = consultProductById;
//ACTUALIZAR PRODUCTOS
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, description, unitValue, idUser } = req.body;
    const product = yield product_1.default.update({ name, description, unitValue, idUser }, {
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `El Producto con el ID: ${id} ha sido actualizado`
    });
});
exports.updateProduct = updateProduct;
//ELIMINAR PRODUCTOS
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; //se elimina por id - por parametro
    yield product_1.default.destroy({
        where: {
            id //se elimina por el id
        }
    });
    res.status(200).json({
        msg: `El Producto con el ID: ${id} ha sido eliminado`
    });
});
exports.deleteProduct = deleteProduct;
