import Order from "../models/OrderModel.js";
import Cart from "../models/CartModel.js";
import CartItem from "../models/CartItemModel.js";
import OrderItem from "../models/OrderItemModel.js";
export const createOrder = async (req, res) => {
  const { customer_id, cart_id } = req.body;

  try {
    const cart = await Cart.findByPk(cart_id, {
      include: [CartItem]
    });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const order = await Order.create({
      customer_id,
      cart_id,
      payment_method: 'Cash on Delivery',
      payment_status: 'Pending',
      order_status: 'New Order'
    });

    // Iterate over cart items and create order items
    await Promise.all(
      cart.cartItems.map(async (cartItem) => {
        await OrderItem.create({
          orderId: order.id,
          productId: cartItem.productId,
          quantity: cartItem.quantity,
        });
      })
    );

    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};
export const updateOrderStatus = async (req, res) => {
    const { orderId } = req.params;
    const { order_status } = req.body;
    try {
        const order = await Order.findByPk(orderId);
        if (order) {
            order.order_status = order_status;
            await order.save();
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to update order status' });
    }
};
export const getOrderDetailsByUserId = async (req, res) => {
    const { userId } = req.body;
  
    try {
      const orders = await Order.findOne({
        where: { customer_id:userId },
        attributes: ['id', 'payment_method', 'payment_status', 'order_status', 'order_date']
      });
  
      res.json(orders);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to retrieve order details' });
    }
};
export const updatePayment = async (req, res) => {
    const { orderId } = req.params;
    const { payment_status } = req.body;
    try {
        const order = await Order.findByPk(orderId);
        if (order) {
            order.payment_status = payment_status;
            await order.save();
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to update payment status' });
    }
};
