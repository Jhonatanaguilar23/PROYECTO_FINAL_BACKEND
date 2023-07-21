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
exports.deleteCustomers = exports.consultCustomerById = exports.consultCustomers = exports.updateCustomers = exports.saveCustomers = void 0;
const customer_1 = __importDefault(require("../models/customer"));
//REGISTRAR CLIENTE
const saveCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { createByIdUser, names, emailCustomer, phone, address } = req.body;
    const customer = yield customer_1.default.create({ names, emailCustomer, phone, address, createByIdUser });
    res.status(200).json({
        msg: `Se ha registrado el Cliente con el ID: ${customer.dataValues.id}`
    });
});
exports.saveCustomers = saveCustomers;
//ACTUALIZAR CLIENTE
const updateCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, names, emailCustomer, phone, address, createByIdUser } = req.body;
    const customer = yield customer_1.default.update({ names, emailCustomer, phone, address, createByIdUser }, {
        where: {
            id //se actualiza por el id
        }
    });
    res.status(200).json({
        msg: `El Cliente con el ID: ${id} ha sido actualizado`
    });
});
exports.updateCustomers = updateCustomers;
//CONSULTAR CLIENTES
const consultCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customer = yield customer_1.default.findAll();
    res.status(200).json({
        msg: 'Consultar Clientes',
        customer,
    });
});
exports.consultCustomers = consultCustomers;
//CONSULTAR CLIENTES POR ID
const consultCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const customer = yield customer_1.default.findByPk(id);
    if (customer) {
        res.status(200).json({
            customer
        });
    }
    else {
        res.status(404).json({
            msg: `El Cliente no existe`
        });
    }
});
exports.consultCustomerById = consultCustomerById;
//ELIMINAR CLIENTE
const deleteCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield customer_1.default.destroy({
        where: {
            id
        }
    });
    res.status(200).json({
        msg: `El Cliente con el ID: ${id} ha sido eliminado`
    });
});
exports.deleteCustomers = deleteCustomers;
