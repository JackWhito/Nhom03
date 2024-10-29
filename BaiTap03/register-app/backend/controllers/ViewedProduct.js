import ViewedProduct from "../models/ViewedProductModel.js";
import Product from "../models/ItemModel.js";

export const trackViewedProduct = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        await ViewedProduct.create({ userId, productId });
        res.status(201).json({ message: 'Product view tracked' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const getViewedProducts = async (req, res) => {
    const { userId } = req.params;
    try {
        const viewedProducts = await ViewedProduct.findAll({
            where: { userId },
            include: [{ model: Product }],
            order: [['viewedAt']],
        });
        res.json(viewedProducts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const clearViewedProducts = async (req, res) => {
    const { userId } = req.params;
    try {
        await ViewedProduct.destroy({
            where: { userId }
        });
        res.json({ message: 'Viewed products cleared' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
