const productsList = [
  {
    id: 1,
    name: "Laptop",
    brand: "Apple",
    category: "Electronics",
    price: 1299.99,
  },
  {
    id: 2,
    name: "Smartphone",
    brand: "Samsung",
    category: "Electronics",
    price: 799.99,
  },
  {
    id: 3,
    name: "Running Shoes",
    brand: "Nike",
    category: "Sports",
    price: 99.99,
  },
  {
    id: 4,
    name: "Coffee Maker",
    brand: "Keurig",
    category: "Kitchen Appliances",
    price: 149.99,
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    brand: "JBL",
    category: "Electronics",
    price: 79.99,
  },
];

export const ProductList = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    return res.end(JSON.stringify(productsList));
  } catch (error) {
    return res.send(error);
  }
};
