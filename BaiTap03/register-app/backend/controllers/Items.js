import Product from "../models/ItemModel.js";
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
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