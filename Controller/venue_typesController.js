const { Venue_venuetype, Venue_type, Venue } = require("../models");
const { validateVenue_venuetype } = require("../validation/venue_venuetypeVal"); 

exports.createVenueVenuetype = async (req, res) => {
  const { error } = validateVenue_venuetype(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueVenuetype = await Venue_venuetype.create(req.body);
    res.status(201).send(venueVenuetype);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueVenuetypes = async (req, res) => {
  try {
    const venueVenuetypes = await Venue_venuetype.findAll();
    res.status(200).send(venueVenuetypes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueVenuetypeById = async (req, res) => {
  try {
    const venueVenuetype = await Venue_venuetype.findByPk(req.params.id,{
       include: [
        {
          model: Venue_type,
          as: "venutype",
        },
        {
          model: Venue,
          as: "venue",
        },
      ],
    });
    if (!venueVenuetype) return res.status(404).send("Venue-venue type not found");

    res.status(200).send(venueVenuetype);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenueVenuetype = async (req, res) => {
  const { error } = validateVenueVenuetype(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueVenuetype = await Venue_venuetype.findByPk(req.params.id, {
     
    });
    if (!venueVenuetype) return res.status(404).send("Venue-venue type not found");

    await venueVenuetype.update(req.body);
    res.status(200).send(venueVenuetype);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenueVenuetype = async (req, res) => {
  try {
    const venueVenuetype = await Venue_venuetype.findByPk(req.params.id);
    if (!venueVenuetype) return res.status(404).send("Venue-venue type not found");

    const data = venueVenuetype.toJSON();
    await venueVenuetype.destroy();
    res.status(204).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
