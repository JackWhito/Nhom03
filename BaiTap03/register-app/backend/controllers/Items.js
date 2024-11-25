import Product from "../models/ItemModel.js";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import ProductImage from "../models/ProductImagesModel.js";
dotenv.config();

export const searchItems = async (req, res) => {
    try {
        const { name } = req.query;
        const where = {};

        if (name) where.name = { [Sequelize.Op.like]: `%${name}%` };

        const items = await Product.findAll({ where });
        res.json(items);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const filterItems = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, minStock, maxStock } = req.query;
        const where = {};

        if (category) where.category = category;
        if (minPrice) where.price = { [Sequelize.Op.gte]: parseFloat(minPrice) };
        if (maxPrice) where.price = { [Sequelize.Op.lte]: parseFloat(maxPrice) };
        if (minStock) where.stock = { [Sequelize.Op.gte]: parseInt(minStock) };
        if (maxStock) where.stock = { [Sequelize.Op.lte]: parseInt(maxStock) };

        const items = await Product.findAll({ where });
        res.json(items);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const getTopSeller = async (req, res) => {
    try {
        const topItems = await Product.findAll({
            order: [
                ['sold','DESC']
            ],
            limit: 10
        });
        res.json(topItems);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const getTopView = async (req, res) => {
    try {
        const topItems = await Product.findAll({
            order: [
                ['viewed','DESC']
            ],
            limit: 10
        });
        res.json(topItems);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const getSimilarProducts = async (req, res) => {
    const { productId } = req.params;
    try {
        // Fetch the product to find its category and tags
        const product = await Product.findByPk(productId);
        
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const { category } = product;

        // Find similar products by category
        const similarProducts = await Product.findAll({
            where: {
                category: category,
                id: {
                    [Sequelize.Op.not]: productId
                }
            },
            limit: 10
        });

        res.json(similarProducts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
export const getItemsById = async (req, res) => {
    try {
        const { productId } = req.params;

        const item = await Product.findByPk(productId);

        if (!item) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(item);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
export const getItemsByIdWithImages = async (req, res) => {
    try {
        const { productId } = req.params;

        const product = await Product.findByPk(productId, {
            include: [ProductImage]
        });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const getAllItems = async (req, res) => {
    try {
        const items = await Product.findAll();
        res.json(items);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const getAllItemsWithImages = async (req, res) => {
    try {
        const items = await Product.findAll({
            include:[ProductImage]
        });
        res.json(items);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};