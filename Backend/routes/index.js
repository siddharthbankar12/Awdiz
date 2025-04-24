import { Router } from "express";
import AuthRoutes from "./auth.routes.js";
import ProductsRoutes from "./products.routes.js";
import UserRoutes from "./user.routes.js";

const AllRouters = Router();

AllRouters.use("/auth", AuthRoutes);
AllRouters.use("/product", ProductsRoutes);
AllRouters.use("/user", UserRoutes);

export default AllRouters;
