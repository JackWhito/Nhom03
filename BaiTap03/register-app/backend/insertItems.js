import Item from "./models/ItemModel.js";
import Users from "./models/UserModel.js";
const insertUsers = async () => {
  try {
    await Users.bulkCreate([
      {
        name: 'Alice',
        email: 'alice@example.com',
        password: 'password1',
        refresh_token: null,
        otp: null,
        otp_expires: null
      },
      {
        name: 'Bob',
        email: 'bob@example.com',
        password: 'password2',
        refresh_token: null,
        otp: null,
        otp_expires: null
      },
      {
        name: 'Charlie',
        email: 'charlie@example.com',
        password: 'password3',
        refresh_token: null,
        otp: null,
        otp_expires: null
      },
      {
        name: 'David',
        email: 'david@example.com',
        password: 'password4',
        refresh_token: null,
        otp: null,
        otp_expires: null
      },
      {
        name: 'Eve',
        email: 'eve@example.com',
        password: 'password5',
        refresh_token: null,
        otp: null,
        otp_expires: null
      }
    ]);
    console.log("5 users have been inserted");
  } catch (error) {
    console.error("Error inserting users:", error);
  }
};

insertUsers();


const items = [
    { name: "Smartphone", category: "electronics", brand: "Mito", price: 699.99, stock: 50, sold: 120, viewed: 800 },
    { name: "Laptop", category: "electronics", brand: "Mito", price: 999.99, stock: 30, sold: 90, viewed: 600 },
    { name: "Tablet", category: "electronics", brand: "Mito", price: 499.99, stock: 40, sold: 100, viewed: 550 },
    { name: "Smartwatch", category: "electronics", brand: "Mito", price: 199.99, stock: 70, sold: 140, viewed: 900 },
    { name: "Bluetooth Speaker", category: "electronics", brand: "Mito", price: 149.99, stock: 100, sold: 160, viewed: 1200 },
    { name: "Wireless Earbuds", category: "electronics", brand: "Mito", price: 129.99, stock: 80, sold: 200, viewed: 1400 },
    { name: "Gaming Console", category: "electronics", brand: "Mito", price: 399.99, stock: 20, sold: 50, viewed: 300 },
    { name: "4K TV", category: "electronics", brand: "Mito", price: 799.99, stock: 15, sold: 45, viewed: 250 },
    { name: "Digital Camera", category: "electronics", brand: "Mito", price: 599.99, stock: 25, sold: 70, viewed: 400 },
    { name: "VR Headset", category: "electronics", brand: "Mito", price: 299.99, stock: 35, sold: 85, viewed: 500 }
];

const insertItems = async () => {
    try {
        await Item.bulkCreate(items);
        console.log("Items inserted successfully!");
    } catch (error) {
        console.error("Error inserting items:", error.message);
    }
};

insertItems();
import ProductImage from "./models/ProductImagesModel.js";

const productImagesData = [
  { productId: 1, imageUrl: 'https://example.com/image1.jpg' },
  { productId: 1, imageUrl: 'https://example.com/image2.jpg' },
  { productId: 2, imageUrl: 'https://example.com/image3.jpg' },
  // Add more product images as needed
];

const insertProductImages = async () => {
  try {
    await ProductImage.bulkCreate(productImagesData);
    console.log('Product images inserted successfully!');
  } catch (error) {
    console.error('Error inserting product images:', error);
  }
};

insertProductImages();