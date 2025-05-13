const {Discount} = require('../models');
const { discount_couponValidate } = require('../validation/discount_cuponVal');

exports.createDiscount = async (req, res) => {
  try {
    const { error } = discount_couponValidate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const discount = await Discount.create(req.body);
    res.status(201).json(discount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllDiscounts = async (req, res) => {
  try {
    const discounts = await Discount.findAll();
    res.json(discounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).json({ error: 'Not found' });
    res.json(discount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDiscount = async (req, res) => {
  try {
    const { error } = discountSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).json({ error: 'Not found' });

    await discount.update(req.body);
    res.json(discount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).json({ error: 'Not found' });

    await discount.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
