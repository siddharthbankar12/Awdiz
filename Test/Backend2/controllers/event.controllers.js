import Event from "../models/event.schema.js";
import User from "../models/user.schema.js";

export const CreateEvent = async (req, res) => {
  try {
    const { title, description, date, time, location, totalSeats, createdBy } =
      req.body;

    if (
      !title ||
      !description ||
      !date ||
      !time ||
      !location ||
      !totalSeats ||
      !createdBy
    ) {
      return res.json({ success: "false", message: "all fields are required" });
    }

    const eventExist = await Event.findOne({ title: title });

    if (eventExist) {
      return res.json({ success: false, message: "event already exist" });
    }

    const createEvent = new Event({
      title,
      description,
      date,
      time,
      location,
      totalSeats,
      createdBy,
    });

    await createEvent.save();

    return res.json({
      success: true,
      message: "event create successfully",
      data: createEvent,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const eventList = await Event.find().populate("createdBy");

    return res.json({
      success: true,
      message: "fetch all events",
      events: eventList,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};

export const SingleEvent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({ success: false, message: "event id required" });
    }

    const event = await Event.findById(id).populate("createdBy");

    return res.json({
      success: true,
      message: "fetch event detail",
      data: event,
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};

export const UpdateEvent = async (req, res) => {
  try {
    const { title, description, date, time, location, totalSeats, adminId } =
      req.body;
    const { id } = req.params;

    const checkAdmin = await User.findById(adminId);

    if (checkAdmin.role !== "admin") {
      return res.json({
        success: false,
        message: "you do not have update the event",
      });
    }

    if (!title || !description || !date || !time || !location || !totalSeats) {
      return res.json({ success: "false", message: "all fields are required" });
    }

    const data = {
      title,
      description,
      date,
      time,
      location,
      totalSeats,
    };

    const updatedData = await Event.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updatedData) {
      return res.json({ success: false, message: "event not exist" });
    } else {
      return res.json({
        success: true,
        message: "updated successful",
        data: updatedData,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};

export const DeleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { adminId } = req.body;

    const checkAdmin = await User.findById(adminId);

    if (checkAdmin.role !== "admin") {
      return res.json({
        success: false,
        message: "you do not have update the event",
      });
    }

    if (!id) {
      return res.json({ success: false, message: "event id required" });
    }

    await Event.findByIdAndDelete(id);

    return res.json({
      success: true,
      message: "event deleted",
    });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error });
  }
};
