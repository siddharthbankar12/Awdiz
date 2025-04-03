import { Router } from "express";
import { ProductList } from "../controllers/products.controllers.js";

const ProductsRoutes = Router();

ProductsRoutes.get("/products-list", ProductList);

export default ProductsRoutes;
