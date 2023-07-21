import { DataTypes } from "sequelize";
import db from "../db/connection";

const Rol = db.define('roles', {
    names: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
   
});

export default Rol;