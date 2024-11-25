import ProductImage from "./models/ProductImagesModel.js"; // Assuming ProductImageModel.js is the file where you defined the ProductImage model

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