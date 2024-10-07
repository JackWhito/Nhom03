import Item from "./models/ItemModel.js";

const items = [
    { name: "Smartphone", category: "electronics", price: 699.99, stock: 50, sold: 120, viewed: 800 },
    { name: "Laptop", category: "electronics", price: 999.99, stock: 30, sold: 90, viewed: 600 },
    { name: "Tablet", category: "electronics", price: 499.99, stock: 40, sold: 100, viewed: 550 },
    { name: "Smartwatch", category: "electronics", price: 199.99, stock: 70, sold: 140, viewed: 900 },
    { name: "Bluetooth Speaker", category: "electronics", price: 149.99, stock: 100, sold: 160, viewed: 1200 },
    { name: "Wireless Earbuds", category: "electronics", price: 129.99, stock: 80, sold: 200, viewed: 1400 },
    { name: "Gaming Console", category: "electronics", price: 399.99, stock: 20, sold: 50, viewed: 300 },
    { name: "4K TV", category: "electronics", price: 799.99, stock: 15, sold: 45, viewed: 250 },
    { name: "Digital Camera", category: "electronics", price: 599.99, stock: 25, sold: 70, viewed: 400 },
    { name: "VR Headset", category: "electronics", price: 299.99, stock: 35, sold: 85, viewed: 500 }
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
