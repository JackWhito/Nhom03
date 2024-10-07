import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Item = db.define('items', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
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
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Item;
