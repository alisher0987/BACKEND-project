const { Customer_card, Customer } = require("../models");
const { validateCustomer_card } = require("../validation/customer_cardVal");
const { Op } = require("sequelize");

exports.createCard = async (req, res) => {
  const { error } = validateCustomer_card(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const card = await Customer_card.create(req.body);
    res.status(201).send(card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCards = async (req, res) => {
  try {
    const cards = await Customer_card.findAll();
    res.status(200).send(cards);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCardById = async (req, res) => {
  try {
    const card = await Customer_card.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
      ],
    });
    if (!card) return res.status(404).send("Card not found");

    res.status(200).send(card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCard = async (req, res) => {
  const { error } = validateCustomerCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const card = await Customer_card.findByPk(req.params.id);
    if (!card) return res.status(404).send("Card not found");

    await card.update(req.body);
    res.status(200).send(card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const card = await Customer_card.findByPk(req.params.id);
    if (!card) return res.status(404).send("Card not found");

    const data = card.toJSON();
    await card.destroy();
    res.status(204).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCards = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const cards = await Customer_card.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { phone: { [Op.iLike]: `%${query}%` } },
          { number: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });

    res.status(200).send(cards);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
