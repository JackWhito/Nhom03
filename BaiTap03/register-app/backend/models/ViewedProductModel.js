import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";
import Product from "./ProductModel.js";

const { DataTypes } = Sequelize;

const ViewedProduct = db.define('viewedproduct', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    viewedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    indexes: [
        {
            unique: true,
            fields: ['userId', 'productId']
        }
    ],
    freezeTableName: true
});
User.hasMany(ViewedProduct, { foreignKey: 'userId' }); 
ViewedProduct.belongsTo(User, { foreignKey: 'userId' });
(async () => {
    await db.sync();
})();

export default ViewedProduct;
