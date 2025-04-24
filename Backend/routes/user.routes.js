import { Router } from "express";
import { AddToCart, GetCartProducts } from "../controllers/user.controllers.js";

const UserRoutes = Router();

UserRoutes.post("/add-to-cart", AddToCart);
UserRoutes.post("/get-cart-products", GetCartProducts);

export default UserRoutes;
