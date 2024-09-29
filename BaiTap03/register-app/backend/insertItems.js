import Item from "./models/ItemModel.js";

const items = [
    { name: "Smartphone", category: "electronics", price: 699.99, stock: 50 },
    { name: "Laptop", category: "electronics", price: 999.99, stock: 30 },
    { name: "Tablet", category: "electronics", price: 499.99, stock: 40 },
    { name: "Smartwatch", category: "electronics", price: 199.99, stock: 70 },
    { name: "Bluetooth Speaker", category: "electronics", price: 149.99, stock: 100 },
    { name: "Wireless Earbuds", category: "electronics", price: 129.99, stock: 80 },
    { name: "Gaming Console", category: "electronics", price: 399.99, stock: 20 },
    { name: "4K TV", category: "electronics", price: 799.99, stock: 15 },
    { name: "Digital Camera", category: "electronics", price: 599.99, stock: 25 },
    { name: "VR Headset", category: "electronics", price: 299.99, stock: 35 }
];

const insertItems = async () => {
    try {
        await Item.bulkCreate(items);
        console.log("Items inserted successfully!");
    } catch (error) {
        console.error("Error inserting items:", error);
    }
};

insertItems();
