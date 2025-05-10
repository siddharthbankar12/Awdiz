import { Router } from "express";
import {
  CreateEvent,
  getAllEvents,
  SingleEvent,
  UpdateEvent,
  DeleteEvent,
} from "../controllers/event.controllers.js";

const EventsRoutes = Router();

EventsRoutes.post("/create-event", CreateEvent);
EventsRoutes.get("/all-events", getAllEvents);
EventsRoutes.get("/single-event/:id", SingleEvent);
EventsRoutes.put("/update-event/:id", UpdateEvent);
EventsRoutes.delete("/delete-event/:id", DeleteEvent);

export default EventsRoutes;
