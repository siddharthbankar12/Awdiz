const http = require("http");
// import http from "http";

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    price: 15.99,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
    price: 12.49,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Literature",
    price: 10.99,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    price: 9.99,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-age Fiction",
    price: 11.79,
  },
];

const products = [
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

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method == "GET" && req.url == "/books") {
    res.end(JSON.stringify(books));
  } else if (req.method == "GET" && req.url === "/products") {
    res.end(JSON.stringify(products));
  } else {
    res.end("error, enter correct url");
  }
});

const backendPort = 8000;

server.listen(backendPort, () => {
  console.log(`server is start on port ${backendPort}`);
});
