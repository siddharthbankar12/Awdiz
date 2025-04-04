import { Router } from "express";
import AuthRoutes from "./auth.routes.js";
import ProductsRoutes from "./products.routes.js";

const AllRouters = Router();

AllRouters.use("/auth", AuthRoutes);
AllRouters.use("/products", ProductsRoutes);

export default AllRouters;
