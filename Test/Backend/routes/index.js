import { Router } from "express";
import TodoRouters from "./todo.routers.js";

const AllRouters = Router();

AllRouters.use("/todo", TodoRouters);

export default AllRouters;
