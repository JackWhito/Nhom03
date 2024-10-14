import { Sequelize } from "sequelize";
import Product from "./ItemModel.js";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const CartItem = db.define('cartItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  }
}, {
  freezeTableName: true
});

(async () => {
  await db.sync();
})();

export default CartItem;

Product.hasMany(CartItem, { foreignKey: 'productId' });
CartItem.belongsTo(Product, { foreignKey: 'productId' });