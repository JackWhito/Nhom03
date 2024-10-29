import { Sequelize } from "sequelize";
import Users from "./UserModel.js";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const BonusPoint = db.define('points', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  value: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  }
}, {
  freezeTableName: true
});

(async () => {
  await db.sync();
})();

export default BonusPoint;

Users.hasOne(BonusPoint, { foreignKey: 'userId' });
BonusPoint.belongsTo(Users, { foreignKey: 'userId' });

