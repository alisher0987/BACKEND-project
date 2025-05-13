const { Payment_method } = require('../models');
const { validatePayment_method } = require('../validation/payment_methodVal');

exports.createPaymentMethod = async (req, res) => {
  const { error } = validatePayment_method(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
      const  payment_method = await Payment_method.create(req.body);
      res.status(201).send(payment_method);
  } catch (error) {
      res.status(500).send(error.message);
  }
};

exports.getPaymentMethods = async (req, res) => {
  try {
    const methods = await Payment_method.findAll();
    res.json(methods);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.getPaymentMethod = async (req, res) => {
  const { id } = req.params;

  try {
    const method = await Payment_method.findByPk(id);
    if (!method) return res.status(404).json({ error: 'To‘lov turi topilmadi' });

    res.json(method);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.updatePaymentMethod = async (req, res) => {
  const { id } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const method = await Payment_method.findByPk(id);
    if (!method) return res.status(404).json({ error: 'To‘lov turi topilmadi' });

    await method.update(req.body);
    res.json(method);
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};

exports.deletePaymentMethod = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Payment_method.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: 'To‘lov turi topilmadi' });

    res.json({ message: 'To‘lov turi o‘chirildi' });
  } catch (error) {
    res.status(500).json({ error: 'Server xatosi' });
  }
};
