const { Lang } = require("../models");
const { validateLang } = require("../validation/langVal");

exports.createLang = async (req, res) => {
  const { error } = validateLang(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const lang = await Lang.create(req.body);
    res.status(201).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLangs = async (req, res) => {
  try {
    const langs = await Lang.findAll();
    res.status(200).send(langs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLangById = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) return res.status(404).send("Lang not found");

    res.status(200).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateLang = async (req, res) => {
  const { error } = validateLang(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) return res.status(404).send("Lang not found");

    await lang.update(req.body);
    res.status(200).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteLang = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) return res.status(404).send("Lang not found");

    const data = lang.toJSON();
    await lang.destroy();
    res.status(204).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
