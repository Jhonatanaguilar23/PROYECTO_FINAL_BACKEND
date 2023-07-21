"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const QuoteProduct = connection_1.default.define('quotes_products', {
    idQuote: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    idProduct: {
        type: sequelize_1.DataTypes.BIGINT
    },
    amount: {
        type: sequelize_1.DataTypes.NUMBER
    },
    totalPrice: {
        type: sequelize_1.DataTypes.DECIMAL
    },
});
exports.default = QuoteProduct;
