import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Product from "./ItemModel.js";
const { DataTypes } = Sequelize;
const ProductImage = db.define('productImages', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id'
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  Product.hasMany(ProductImage, { foreignKey: 'productId' });
  ProductImage.belongsTo(Product, { foreignKey: 'productId' });

  (async () => {
  await db.sync();
})();

export default ProductImage;