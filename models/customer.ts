import { DataTypes } from "sequelize";
import db from "../db/connection";

const Customer = db.define('customers', {
    names: {
        type: DataTypes.STRING
    },
    emailCustomer: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.BIGINT
    },
    createByIdUser: {
        type: DataTypes.BIGINT
    },
    
});

export default Customer;