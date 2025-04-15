import { Router } from "express";
import { AddProduct } from "../controllers/products.controllers.js";

const ProductsRoutes = Router();

ProductsRoutes.post("/add-product", AddProduct);

export default ProductsRoutes;
