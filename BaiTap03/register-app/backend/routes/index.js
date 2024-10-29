import express from "express";
import { verifyOtp, forgotPassword, resetPassword, checkUser, getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { searchItems, filterItems, getTopSeller, getTopView } from "../controllers/Items.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { addToCart, removeFromCart, subtractQuantity, viewCart, removeAllFromCart } from '../controllers/Cart.js';
import { createOrder, getOrderDetails, updateOrderStatus, updatePayment } from "../controllers/Order.js";
import { getAllComment, getCommentByUser } from "../controllers/Comment.js";
import { getAllVoucher, searchVoucher } from "../controllers/Voucher.js";
import { getPointByUserID } from "../controllers/BonusPoint.js";

const router = express.Router();
 
// Users related
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.post('/checkUser', checkUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/verifyOtp', verifyOtp);
// Items related
router.get('/items/search',searchItems);
router.get('/items/filter', filterItems);
router.get('/items/topsell', getTopSeller);
router.get('/items/topview', getTopView);
// Cart related
router.post('/cart/add', addToCart);
router.post('/cart/remove', removeFromCart);
router.get('/cart', viewCart);
router.post('/cart/subtract', subtractQuantity);
router.post('/cart/empty', removeAllFromCart);
// Order related
router.post('/create-order',createOrder);
router.put('/update-order/:orderId',updateOrderStatus);
router.get('/order/:orderId', getOrderDetails);
router.put('/update-payment/:orderId',updatePayment);
// Comment related
router.get('/comments',getAllComment);
router.get('/comments/:userId', getCommentByUser);
// Voucher realted
router.get('/vouchers',getAllVoucher);
router.get('/vouchers/:voucherId',searchVoucher);
// Point related
router.get('/points/:userId',getPointByUserID);
export default router;