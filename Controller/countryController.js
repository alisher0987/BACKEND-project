const { Country } = require('../models');
const { validateCountry } = require("../validation/countryVal");

exports.createCountry = async (req, res) => {
  const { error } = validateCountry(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const country = await Country.create(req.body);
    res.status(201).send(country);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.getCountry = async (req, res) => {
  const { id } = req.params;
  try {
    const country = await Country.findByPk(id);
    if (!country) return res.status(404).json({ error: 'Davlat topilmadi' });
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.updateCountry = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const country = await Country.findByPk(id);
    if (!country) return res.status(404).json({ error: 'Davlat topilmadi' });

    await country.update(req.body);
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.deleteCountry = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Country.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: 'Davlat topilmadi' });

    res.json({ message: 'Davlat o‘chirildi' });
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};
