const { Venue_type } = require("../models");
const { validateVenue_type } = require("../validation/venue_typeVal");

exports.createVenueType = async (req, res) => {
  const { error } = validateVenue_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueType = await Venue_type.create(req.body);
    res.status(201).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueTypes = async (req, res) => {
  try {
    const venueTypes = await Venue_type.findAll();
    res.status(200).send(venueTypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueTypeById = async (req, res) => {
  try {
    const venueType = await Venue_type.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("Venue type not found");

    res.status(200).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenueType = async (req, res) => {
  const { error } = validateVenue_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueType = await Venue_type.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("Venue type not found");

    await venueType.update(req.body);
    res.status(200).send(venueType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenueType = async (req, res) => {
  try {
    const venueType = await Venue_type.findByPk(req.params.id);
    if (!venueType) return res.status(404).send("Venue type not found");

    const data = venueType.toJSON();
    await venueType.destroy();
    res.status(204).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
