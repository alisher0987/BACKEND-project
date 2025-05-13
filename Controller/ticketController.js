const { Ticket, Event, Seat, Status } = require('../models');
const { validateTicket } = require('../validation/ticketVal');


exports.createTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    console.error('Create Ticket Error:', error);
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.json(tickets);
  } catch (error) {
    console.error('Get Tickets Error:', error);
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        { model: Event, as: 'event' },
        { model: Seat, as: 'seat' },
        { model: Status, as: 'status' },
      ],
    });
    if (!ticket) return res.status(404).json({ error: 'Chipta topilmadi' });
    res.json(ticket);
  } catch (error) {
    console.error('Get Ticket Error:', error);
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.updateTicket = async (req, res) => {



  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).json({ error: 'Chipta topilmadi' });
    await ticket.update(req.body);
    res.json(ticket);
  } catch (error) {
    console.error('Update Ticket Error:', error);
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const deleted = await Ticket.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Chipta topilmadi' });
    res.json({ message: 'Chipta ochirildi' });
  } catch (error) {
    console.error('Delete Ticket Error:', error);
    res.status(500).json({ error: 'Server xatosi' });
  }
};
