import Cart from "../models/CartModel.js";
import CartItem from "../models/CartItemModel.js";
import Product from "../models/ItemModel.js";
import Users from "../models/UserModel.js";
export const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    
    let cart = await Cart.findOne({ where: { userId } });
    if (!cart) {
      cart = await Cart.create({ userId });
    }

    const [cartItem, created] = await CartItem.findOrCreate({
      where: { cartId: cart.id, productId },
      defaults: { quantity }
    });

    if (!created) {
      cartItem.quantity += quantity;
      await cartItem.save();
    }

    const product = await Product.findByPk(productId);
    cart.total += product.price * quantity;
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
export const removeFromCart = async (req, res) => {
    try {
      const { userId, productId } = req.body;
      
      const cart = await Cart.findOne({ where: { userId } });
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
  
      const cartItem = await CartItem.findOne({ where: { cartId: cart.id, productId } });
      if (!cartItem) {
        return res.status(404).json({ error: 'Product not found in cart' });
      }
  
      const product = await Product.findByPk(productId);
      cart.total -= product.price * cartItem.quantity;
      await cartItem.destroy();
      await cart.save();
  
      res.json(cart);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };
export const viewCart = async (req, res) => {
  try {
    const { userId } = req.query;
    
    const cart = await Cart.findOne({ 
      where: { userId },
      include: [{ model: CartItem, include: [Product] }]
    });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
  