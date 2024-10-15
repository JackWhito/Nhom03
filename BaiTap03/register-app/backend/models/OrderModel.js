import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Cart from "./CartModel.js";

const { DataTypes } = Sequelize;
const Order = db.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cart',
            key: 'id'
        }
    },
    payment_method: {
        type: DataTypes.ENUM('Cash on Delivery'),
        defaultValue: 'Cash on Delivery',
        allowNull: false
    },
    payment_status: {
        type: DataTypes.ENUM('Pending', 'Paid'),
        defaultValue: 'Pending',
        allowNull: false
    },
    order_status: {
        type: DataTypes.ENUM('New Order', 'Shop Confirmed', 'Shop Preparing Order', 'Shipping', 'Shipping Complete', 'Canceled'),
        defaultValue: 'New Order',
        allowNull: false
    },
    order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    freezeTableName: true
});

Order.belongsTo(Cart, { foreignKey: 'cart_id' });

(async () => {
  await db.sync();
})();

export default Order;
