import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Voucher = db.define('voucher', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  percent: {
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

export default Voucher;