const { model } = require("mongoose");
const { Event, Venue, Human_category, Lang, Event_type } = require("../models");
const { validateEvent } = require("../validation/eventVal");

exports.createEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const evevnt = await  Event.create(req.body);
    res.status(201).json(evevnt);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [
        {
          model: Venue,
          as: "venue",
        },
        {
          model: Human_category,
          as: "human_category",
        },
        {
          model: Lang,
          as: "lang",
        },
        {
          model: Event_type,
          as: "event_type",
        },
      ],
    });
    if (!event) return res.status(404).send("Event not found");

    res.status(200).send(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).send("Event not found");

    await event.update(req.body);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).send("Event not found");

    const data = event.toJSON();
    await event.destroy();
    res.status(204).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
