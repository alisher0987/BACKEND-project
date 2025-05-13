const { Seat, Seat_type, Venue, } = require('../models');
const { validateSeat } = require('../validation/seatVal');


exports.createSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
      const  seat = await Seat.create(req.body);
      res.status(201).send(seat);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

exports.getSeats = async (req, res) => {
  try {
    const seats = await Seat.findAll();
    res.json(seats);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.getSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id, {
      include: [
        {
          model: Seat_type,
          as: 'seat_type',
        },
        {
          model: Venue,
          as: 'venue',
        },
      ],
    });
    if (!seat) return res.status(404).json({ error: 'Orin topilmadi' });
    res.json(seat);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.updateSeat = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).json({ error: 'Orin topilmadi' });
    await seat.update(req.body);
    res.json(seat);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.deleteSeat = async (req, res) => {
  try {
    const deleted = await Seat.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Orin topilmadi' });
    res.json({ message: 'Orin ochirildi' });
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};
