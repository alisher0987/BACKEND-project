const { Status } = require('../models');
const {validateStatus} = require('../validation/statusVal'); 

exports.createStatus = async (req, res) => {
  const { error } = validateStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
      const  status = await Status.create(req.body);
      res.status(201).send(status);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

exports.getStatuses = async (req, res) => {
  try {
    const statuses = await Status.findAll();
    res.json(statuses);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.getStatus = async (req, res) => {
  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).json({ error: 'Holat topilmadi' });
    res.json(status);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.updateStatus = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const status = await Status.findByPk(req.params.id);
    if (!status) return res.status(404).json({ error: 'Holat topilmadi' });
    await status.update(req.body);
    res.json(status);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.deleteStatus = async (req, res) => {
  try {
    const deleted = await Status.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Holat topilmadi' });
    res.json({ message: 'Holat o‘chirildi' });
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};
