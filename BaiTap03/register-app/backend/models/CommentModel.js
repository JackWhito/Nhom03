import { Sequelize } from "sequelize";
import Users from "./UserModel.js";
import Product from "./ItemModel.js";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Comment = db.define('comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stars:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  freezeTableName: true
});

(async () => {
  await db.sync();
})();

export default Comment;

Users.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(Users, { foreignKey: 'userId' });


Product.hasMany(Comment, { foreignKey: 'productId' });
Comment.belongsTo(Product, { foreignKey: 'productId' });
