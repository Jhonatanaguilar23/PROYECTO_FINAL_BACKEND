"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Customer = connection_1.default.define('customers', {
    names: {
        type: sequelize_1.DataTypes.STRING
    },
    emailCustomer: {
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    address: {
        type: sequelize_1.DataTypes.BIGINT
    },
    createByIdUser: {
        type: sequelize_1.DataTypes.BIGINT
    },
});
exports.default = Customer;
