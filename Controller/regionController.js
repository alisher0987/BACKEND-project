const { Region } = require('../models');
const { validateRegion } = require('../validation/regionVal');
exports.createRegion = async (req, res) => {
  const { error } = validateRegion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
      const  region = await Region.create(req.body);
      res.status(201).send(region);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

exports.getRegions = async (req, res) => {
  try {
    const regions = await Region.findAll();
    res.json(regions);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.getRegion = async (req, res) => {
  const { id } = req.params;

  try {
    const region = await Region.findByPk(id);
    if (!region) return res.status(404).json({ error: 'Hudud topilmadi' });

    res.json(region);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.updateRegion = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const region = await Region.findByPk(id);
    if (!region) return res.status(404).json({ error: 'Hudud topilmadi' });

    await region.update(req.body);
    res.json(region);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.deleteRegion = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Region.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: 'Hudud topilmadi' });

    res.json({ message: 'Hudud o‘chirildi' });
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};
