import { Router } from "express";
import {
  AddToCart,
  DeleteCartProduct,
  GetCartProducts,
  UpdateCartProductQuantity,
} from "../controllers/user.controllers.js";

const UserRoutes = Router();

UserRoutes.post("/add-to-cart", AddToCart);
UserRoutes.post("/get-cart-products", GetCartProducts);
UserRoutes.post("/delete-cart-products", DeleteCartProduct);
UserRoutes.post("/update-cart-product-quantity", UpdateCartProductQuantity);

export default UserRoutes;
