import { DataTypes } from "sequelize";
import db from "../db/connection";

const Product = db.define('products', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    unitValue: {
        type: DataTypes.DECIMAL
    },
    idUser: {
        type: DataTypes.BIGINT
    },
    
});

export default Product;