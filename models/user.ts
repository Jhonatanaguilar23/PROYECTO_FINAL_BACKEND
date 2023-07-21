import { DataTypes } from "sequelize";
import db from "../db/connection";              //importo la conección a la base de datos
import Rol from '../models/roles'

const User = db.define('users', {               // nombre de la tabla - especifica los campos de la tabla user en la bd
    names: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.BOOLEAN
    },
    idRol: {
        type: DataTypes.BIGINT
    },
    createdByRol: {
        type: DataTypes.BIGINT
    }
});

//relacion de la tabla user - roles
User.belongsTo(Rol, {
     foreignKey: 'idRol'
})

export default User;                              // exporta la variable con el modelo de la tabla user