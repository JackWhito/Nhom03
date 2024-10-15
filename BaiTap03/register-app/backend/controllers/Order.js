import Order from "../models/OrderModel.js";
import Cart from "../models/CartModel.js";
import CartItem from "../models/CartItemModel.js";
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
export const getOrderDetails = async (req, res) => {
    const { orderId } = req.params;
    try {
        const order = await Order.findByPk(orderId, {
            include: {
                model: Cart,
                include: [CartItem]
            }
        });
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: 'Order not found' });
        }
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
