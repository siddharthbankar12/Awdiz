import mongoose, { model, Schema } from "mongoose";

const BookingSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },

    event: { type: mongoose.Schema.Types.ObjectId, ref: "Events" },

    seats: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const Booking = model("Bookings", BookingSchema);

export default Booking;
