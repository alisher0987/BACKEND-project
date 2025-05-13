
const { Cart, Customer, Status } = require("../models");
const { validateCart } = require("../validation/cartVal");

exports.create = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const cart = await Cart.create(req.body);
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const cart = await Cart.findAll();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
        {
          model: Status,
          as: "status",
        },
      ],
    })
  
    if (!cart) return res.status(404).json({ error: "Booking not found" });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).json({ error: "Booking not found" });

    await cart.update(req.body);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).json({ error: "Booking not found" });

    await cart.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
