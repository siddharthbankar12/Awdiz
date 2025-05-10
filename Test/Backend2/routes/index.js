import { Router } from "express";
import AuthRoutes from "./auth.routes.js";
import BookingRoutes from "./booking.routes.js";
import EventsRoutes from "./events.routes.js";

const AllRouters = Router();

AllRouters.use("/auth", AuthRoutes);
AllRouters.use("/booking", BookingRoutes);
AllRouters.use("/events", EventsRoutes);

export default AllRouters;
