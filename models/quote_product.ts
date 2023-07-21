import { DataTypes } from "sequelize";
import db from "../db/connection";




const Quote_product = db.define('quotes_products', {
    
    idQuote: {
        type: DataTypes.BIGINT,        
    },
    idProduct: {
        type: DataTypes.BIGINT
    },
    amount: {
        type: DataTypes.NUMBER
    },
    totalPrice: {
        type: DataTypes.DECIMAL
    },
    
});


export default Quote_product;