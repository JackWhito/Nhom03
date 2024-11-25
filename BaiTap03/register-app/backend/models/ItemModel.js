import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define('products', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,    
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sold:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    viewed:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    onsale:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Product;
