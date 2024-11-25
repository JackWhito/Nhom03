import Product from "../models/ItemModel.js";
import ProductImage from "../models/ProductImagesModel.js";
export const getProductImages = async (req, res) => {
    const { productId } = req.params;
    try {
        const images = await ProductImage.findAll({
            where: { productId },
            include: [{ model: Product }],
        });
        res.json(images);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

