const { Venue_photo, Venue } = require("../models");
const { validateVenue_photo} = require("../validation/venue_photoVal"); 

exports.createVenuePhoto = async (req, res) => {
  const { error } = validateVenue_photo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuePhoto = await Venue_photo.create(req.body);
    res.status(201).send(venuePhoto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenuePhotos = async (req, res) => {
  try {
    const venuePhotos = await Venue_photo.findAll();
    res.status(200).send(venuePhotos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenuePhotoById = async (req, res) => {
  try {
    const venuePhoto = await Venue_photo.findByPk(req.params.id, {
      include: [
        {
          model: Venue,
          as: "venue",
        },
      ],
    });
    if (!venuePhoto) return res.status(404).send("Venue photo not found");

    res.status(200).send(venuePhoto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenuePhoto = async (req, res) => {
  const { error } = validateVenuePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuePhoto = await Venue_photo.findByPk(req.params.id);
    if (!venuePhoto) return res.status(404).send("Venue photo not found");

    await venuePhoto.update(req.body);
    res.status(200).send(venuePhoto);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteVenuePhoto = async (req, res) => {
  try {
    const venuePhoto = await Venue_photo.findByPk(req.params.id);
    if (!venuePhoto) return res.status(404).send("Venue photo not found");

    const data = venuePhoto.toJSON();
    await venuePhoto.destroy();
    res.status(204).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
