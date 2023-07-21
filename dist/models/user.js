"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection")); //importo la conección a la base de datos
const roles_1 = __importDefault(require("../models/roles"));
const User = connection_1.default.define('users', {
    names: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    idRol: {
        type: sequelize_1.DataTypes.BIGINT
    },
    createdByRol: {
        type: sequelize_1.DataTypes.BIGINT
    }
});
//relacion de la tabla user - roles
User.belongsTo(roles_1.default, {
    foreignKey: 'idRol'
});
exports.default = User; // exporta la variable con el modelo de la tabla user
