import { Sequelize } from "sequelize";
import Users from "./UserModel.js";
import Product from "./ItemModel.js";
import CartItem from "./CartItemModel.js";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Cart = db.define('cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0,
    allowNull: false,
  }
}, {
  freezeTableName: true
});

(async () => {
  await db.sync();
})();

export default Cart;

Users.hasOne(Cart, { foreignKey: 'userId' });
Cart.belongsTo(Users, { foreignKey: 'userId' });

Cart.belongsToMany(Product, { through: CartItem, foreignKey: 'cartId' });
Product.belongsToMany(Cart, { through: CartItem, foreignKey: 'productId' });

Cart.hasMany(CartItem, { foreignKey: 'cartId' });
CartItem.belongsTo(Cart, { foreignKey: 'cartId' });
