import { Sequelize } from "sequelize";
import Product from "./ItemModel.js";
import db from "../config/Database.js";
import Order from "./OrderModel.js";

const { DataTypes } = Sequelize;

const OrderItem = db.define('orderItem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: {
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

export default OrderItem;

Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });