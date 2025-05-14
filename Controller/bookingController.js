const { Booking, Status, Delivery_method, Payment_method, Discount, Cart } = require("../models");
const { validateBooking } = require("../validation/bookingVal");

exports.create = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id,{
      include: [{
        model: Status,
        as: "status",
        
      },
      {
        model: Delivery_method,
        as: "delivery_method",
      },
      {
        model: Payment_method,
        as: "payment_method",
      },
      {
        model: Cart,
        as: "bookings",
      },
      {
        model: Discount,
        as: "discount_coupon",
      }
      ],
    });
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    await booking.update(req.body);
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    await booking.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
