import { Router } from "express";
import {
  AddToCart,
  DeleteCartProduct,
  GetCartProducts,
  UpdateCartProductQuantity,
  CheckOut,
  GetOrderHistory,
} from "../controllers/user.controllers.js";

const UserRoutes = Router();

UserRoutes.post("/add-to-cart", AddToCart);
UserRoutes.post("/get-cart-products", GetCartProducts);
UserRoutes.post("/delete-cart-products", DeleteCartProduct);
UserRoutes.post("/update-cart-product-quantity", UpdateCartProductQuantity);
UserRoutes.post("/checkout", CheckOut);
UserRoutes.post("/get-order-history", GetOrderHistory);

export default UserRoutes;
