"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Quote = connection_1.default.define('quotes', {
    id: {
        type: sequelize_1.DataTypes.BIGINT
    },
    detail: {
        type: sequelize_1.DataTypes.STRING
    },
    totalPrice: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    idUser: {
        type: sequelize_1.DataTypes.BIGINT
    },
    idCustomers: {
        type: sequelize_1.DataTypes.BIGINT
    },
});
exports.default = Quote;
