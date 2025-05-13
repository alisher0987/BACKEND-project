const { Human_category } = require("../models");
const { validateHuman_category} = require("../validation/human_categoryVal");

exports.createHumanCategory = async (req, res) => {
  const { error } = validateHuman_category(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const humanCategory = await Human_category.create(req.body);
    res.status(201).send(humanCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHumanCategories = async (req, res) => {
  try {
    const humanCategories = await Human_category.findAll();
    res.status(200).send(humanCategories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHumanCategoryById = async (req, res) => {
  try {
    const humanCategory = await Human_category.findByPk(req.params.id);
    if (!humanCategory) return res.status(404).send("Human category not found");

    res.status(200).send(humanCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const humanCategory = await Human_category.findByPk(req.params.id);
    if (!humanCategory) return res.status(404).send("Human category not found");

    await humanCategory.update(req.body);
    res.status(200).send(humanCategory);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteHumanCategory = async (req, res) => {
  try {
    const humanCategory = await Human_category.findByPk(req.params.id);
    if (!humanCategory) return res.status(404).send("Human category not found");

    const data = humanCategory.toJSON();
    await humanCategory.destroy();
    res.status(204).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
