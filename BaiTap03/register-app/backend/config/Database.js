import { Sequelize } from "sequelize";
 
const db = new Sequelize('auth_db', 'admin', 'izukaken123', {
    host: "localhost",
    dialect: "mysql"
});

export default db;