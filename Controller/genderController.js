const { Gender } = require("../models");
const { validateGender } = require("../validation/genderVal");

exports.createGender = async (req, res) => {
  const { error } = validateGender(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const gender = await Gender.create(req.body);
    res.status(201).send(gender);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getGenders = async (req, res) => {
  try {
    const genders = await Gender.findAll();
    res.status(200).send(genders);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getGenderById = async (req, res) => {
  try {
    const gender = await Gender.findByPk(req.params.id);
    if (!gender) return res.status(404).send("Gender not found");

    res.status(200).send(gender);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateGender = async (req, res) => {
  const { error } = validateGender(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const gender = await Gender.findByPk(req.params.id);
    if (!gender) return res.status(404).send("Gender not found");

    await gender.update(req.body);
    res.status(200).send(gender);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteGender = async (req, res) => {
  try {
    const gender = await Gender.findByPk(req.params.id);
    if (!gender) return res.status(404).send("Gender not found");

    const data = gender.toJSON();
    await gender.destroy();
    res.status(204).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
