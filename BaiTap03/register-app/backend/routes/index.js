import express from "express";
import { verifyOtp, forgotPassword, resetPassword, checkUser, getUsers, Register, Login, Logout, getUserById } from "../controllers/Users.js";
import { searchItems, filterItems, getTopSeller, getTopView, getItemsById, getItemsByIdWithImages, getAllItems, getAllItemsWithImages } from "../controllers/Items.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { addToCart, removeFromCart, subtractQuantity, viewCart, removeAllFromCart, addQuantity, getCart } from '../controllers/Cart.js';
import { createOrder, getOrderDetailsByUserId, updateOrderStatus, updatePayment } from "../controllers/Order.js";
import { getAllComment, getCommentByUser } from "../controllers/Comment.js";
import { getAllVoucher, searchVoucher } from "../controllers/Voucher.js";
import { getPointByUserID } from "../controllers/BonusPoint.js";
import { getViewedProducts } from "../controllers/ViewedProduct.js";
import { getProductImages } from "../controllers/ProducImages.js";

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
router.post('/user/info', getUserById);
// Items related
router.get('/items/search',searchItems);
router.get('/items/filter', filterItems);
router.get('/items/topsell', getTopSeller);
router.get('/items/topview', getTopView);
router.get('/items/:productId',getItemsByIdWithImages);
router.get('/items',getAllItems);
router.get('/images/all',getAllItemsWithImages);
// Cart related
router.post('/cart/add', addToCart);
router.post('/cart/remove', removeFromCart);
router.post('/cart/all', viewCart);
router.post('/cart/subtract', subtractQuantity);
router.post('/cart/empty', removeAllFromCart);
router.post('/cart/plus',addQuantity);
router.post('/cart/view', getCart);
// Order related
router.post('/create-order',createOrder);
router.put('/update-order/:orderId',updateOrderStatus);
router.post('/order', getOrderDetailsByUserId);
router.put('/update-payment/:orderId',updatePayment);
// Comment related
router.get('/comments',getAllComment);
router.get('/comments/:userId', getCommentByUser);
// Voucher realted
router.get('/vouchers',getAllVoucher);
router.get('/vouchers/:voucherId',searchVoucher);
// Point related
router.get('/points/:userId',getPointByUserID);
// Viewed related
router.get('/viewed/:userId',getViewedProducts);
// image related
router.get('/images/:productId',getProductImages);
export default router;