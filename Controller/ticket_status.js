const { Ticket_status } = require('../models');
const { validateTicket_status } = require('../validation/ticket_statusVal');

exports.createTicketStatus = async (req, res) => {
  const { error } = validateTicket_status(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
      const  ticketstatus = await Ticket_status.create(req.body);
      res.status(201).send(ticketstatus);
  } catch (error) {
      res.status(500).send(error.message);
  }
};


exports.getTicketStatuses = async (req, res) => {
  try {
    const statuses = await Ticket_status.findAll();
    res.json(statuses);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.getTicketStatus = async (req, res) => {
  try {
    const status = await Ticket_status.findByPk(req.params.id);
    if (!status) return res.status(404).json({ error: 'Chipta holati topilmadi' });
    res.json(status);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.updateTicketStatus = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const status = await Ticket_status.findByPk(req.params.id);
    if (!status) return res.status(404).json({ error: 'Chipta holati topilmadi' });
    await status.update(req.body);
    res.json(status);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.deleteTicketStatus = async (req, res) => {
  try {
    const deleted = await Ticket_status.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Chipta holati topilmadi' });
    res.json({ message: 'Chipta holati o‘chirildi' });
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};
