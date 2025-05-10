import { Router } from "express";
import {
  Bookings,
  getAllBookings,
} from "../controllers/booking.controllers.js";

const BookingRoutes = Router();

BookingRoutes.post("/book-seats", Bookings);
BookingRoutes.get("/bookings", getAllBookings);

export default BookingRoutes;
