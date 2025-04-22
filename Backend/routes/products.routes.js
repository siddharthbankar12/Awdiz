import { Router } from "express";
import {
  AddProduct,
  AddedProducts,
} from "../controllers/products.controllers.js";

const ProductsRoutes = Router();

ProductsRoutes.post("/add-product", AddProduct);
ProductsRoutes.post("/added-products", AddedProducts);

export default ProductsRoutes;
