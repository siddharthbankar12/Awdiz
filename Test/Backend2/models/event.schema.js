import mongoose, { model, Schema } from "mongoose";

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  totalSeats: { type: Number, required: true },
  bookedSeats: { type: [Number], default: [] },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Event = model("Events", EventSchema);

export default Event;
