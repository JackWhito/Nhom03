import Cart from "../models/CartModel.js";
import CartItem from "../models/CartItemModel.js";
import Product from "../models/ItemModel.js";
import ProductImage from "../models/ProductImagesModel.js";
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
    const { userId } = req.body;
    const cart = await Cart.findOne({
      where: { userId },
      include: [{ model: CartItem, include: [{ model: Product }] }]
    });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const products = cart.cartItems.map(cartItem => ({
      product: cartItem.product,
      quantity: cartItem.quantity
    }));

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Function to subtract quantity of an item from the cart
export const subtractQuantity = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const cart = await Cart.findOne({ where: { userId } });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const cartItem = await CartItem.findOne({ where: { cartId: cart.id, productId } });
    if (!cartItem) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    if (cartItem.quantity <= quantity) {
      const product = await Product.findByPk(productId);
      cart.total -= product.price * cartItem.quantity;
      await cartItem.destroy();
    } else {
      cartItem.quantity -= quantity;
      const product = await Product.findByPk(productId);
      cart.total -= product.price * quantity;
      await cartItem.save();
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// Function to subtract quantity of an item from the cart
export const addQuantity = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const cart = await Cart.findOne({ where: { userId } });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const cartItem = await CartItem.findOne({ where: { cartId: cart.id, productId } });
    if (!cartItem) {
      return res.status(404).json({ error: 'Product not found in cart' });
    }

    cartItem.quantity += quantity;
    const product = await Product.findByPk(productId);
    cart.total -= product.price * quantity;
    await cartItem.save();

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
// Function to remove all items from the cart
export const removeAllFromCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const cart = await Cart.findOne({ where: { userId } });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const cartItems = await CartItem.findAll({ where: { cartId: cart.id } });
    for (const item of cartItems) {
      await item.destroy();
    }

    cart.total = 0;
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const cart = await Cart.findOne({ where: { userId } });
    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};