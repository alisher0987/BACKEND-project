const { Sector } = require('../models');
const { validateSector } = require('../validation/sectorVal');

exports.createSector = async (req, res) => {
  const { error } = validateSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
      const  sector = await Sector.create(req.body);
      res.status(201).send(sector);
  } catch (error) {
      res.status(500).send(error.message);
  }
};
exports.getSectors = async (req, res) => {
  try {
    const sectors = await Sector.findAll();
    res.json(sectors);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.getSector = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).json({ error: 'Sektor topilmadi' });
    res.json(sector);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.updateSector = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).json({ error: 'Sektor topilmadi' });
    await sector.update(req.body);
    res.json(sector);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.deleteSector = async (req, res) => {
  try {
    const deleted = await Sector.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Sektor topilmadi' });
    res.json({ message: 'Sektor o‘chirildi' });
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};
