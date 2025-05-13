const { Seat_type } = require('../models');
const { validateSeat_type } = require('../validation/seat_typeVal');


exports.createSeatType = async (req, res) => {
  const { error } = validateSeat_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
      const  seatType = await Seat_type.create(req.body);
      res.status(201).send(seatType);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

exports.getSeatTypes = async (req, res) => {
  try {
    const seatTypes = await Seat_type.findAll();
    res.json(seatTypes);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.getSeatType = async (req, res) => {
  const { id } = req.params;

  try {
    const seatType = await Seat_type.findByPk(id);
    if (!seatType) return res.status(404).json({ error: 'O‘rindiq turi topilmadi' });

    res.json(seatType);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.updateSeatType = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const seatType = await Seat_type.findByPk(id);
    if (!seatType) return res.status(404).json({ error: 'O‘rindiq turi topilmadi' });

    await seatType.update(req.body);
    res.json(seatType);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.deleteSeatType = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Seat_type.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: 'O‘rindiq turi topilmadi' });

    res.json({ message: 'O‘rindiq turi o‘chirildi' });
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};
