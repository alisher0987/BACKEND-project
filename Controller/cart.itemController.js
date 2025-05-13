const { Cart_item, Ticket, Cart } = require("../models");
const { validateCart_item } = require("../validation/cart_itemVal");

exports.create = async (req, res) => {
  const { error } = validateCart_item(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const item = await Cart_item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const items = await Cart_item.findAll();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await Cart_item.findByPk(req.params.id, {
      include: [
        {
          model: Ticket,
          as: "ticket",
        },
        {
          model: Cart,
          as: "cart",
        },
      ],
    });
    if (!item) return res.status(404).json({ error: "Cart item not found" });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const item = await Cart_item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "Cart item not found" });

    await item.update(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const item = await Cart_item.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "Cart item not found" });

    await item.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
