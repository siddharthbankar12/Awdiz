import Event from "../models/event.schema.js";
import User from "../models/user.schema.js";
import Booking from "../models/booking.schema.js";

export const Bookings = async (req, res) => {
  try {
    const { userId, eventTitle, noOfSeats } = req.body;

    if (!userId) {
      return res.json({ success: false, message: "User ID is required" });
    }

    const userExist = await User.findById(userId);
    if (!userExist) {
      return res.json({
        success: false,
        message: "User not registered, please register first",
      });
    }

    const eventExist = await Event.findOne({ title: eventTitle });
    if (!eventExist) {
      return res.json({ success: false, message: "Event not found" });
    }

    const alreadyBookedSeats = eventExist.bookedSeats;
    const alreadyBooked = noOfSeats.filter((seat) =>
      alreadyBookedSeats.includes(seat)
    );
    const seatsToBook = noOfSeats.filter(
      (seat) => !alreadyBookedSeats.includes(seat)
    );

    if (alreadyBooked.length > 0) {
      return res.json({
        success: false,
        message: "Some seats are already booked",
        data: alreadyBooked,
      });
    }

    const newBooking = new Booking({
      user: userId,
      event: eventExist._id,
      seats: seatsToBook,
    });

    await newBooking.save();

    eventExist.bookedSeats.push(...seatsToBook);
    await eventExist.save();

    const populatedBooking = await Booking.findById(newBooking._id).populate([
      "user",
      "event",
    ]);

    return res.json({
      success: true,
      message: "Your seats are booked successfully",
      booking: populatedBooking,
    });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: error });
  }
};

export const getAllBookings = async (req, res) => {};
