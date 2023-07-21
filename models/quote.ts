import { DataTypes } from "sequelize";
import db from "../db/connection";




const Quote = db.define('quotes', {
  
    detail: {
        type: DataTypes.STRING
    },
    totalPrice: {
        type: DataTypes.DECIMAL
    },
    idUser: {
        type: DataTypes.BIGINT
    },
    idCustomers: {
        type: DataTypes.BIGINT
    },
    
});



export default Quote;
