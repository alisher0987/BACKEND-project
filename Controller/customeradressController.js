const { Customer_address, Region, Customer, District, Country  } = require("../models");
const { validateCustomer_address } = require("../validation/customer_addressVal");
const { Op } = require("sequelize");

exports.createAddress = async (req, res) => {
  const { error } = validateCustomer_address(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const address = await Customer_address.create(req.body);
    res.status(201).send(address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAddresses = async (req, res) => {
  try {
    const addresses = await Customer_address.findAll();
    res.status(200).send(addresses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAddressById = async (req, res) => {
  try {
    const address = await Customer_address.findByPk(req.params.id, {
      include: [
        {
          model: Region,
          as: "region",
        },
        {
          model: Customer,
          as: "customer",
        },
        {
          model: District,
          as: "district",
        },
        {
          model: Country,
          as: "country",
        },
      ],
    });
    if (!address) return res.status(404).send("Address not found");

    res.status(200).send(address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateAddress = async (req, res) => {
  const { error } = validateCustomerAddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const address = await Customer_address.findByPk(req.params.id);
    if (!address) return res.status(404).send("Address not found");

    await address.update(req.body);
    res.status(200).send(address);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const address = await Customer_address.findByPk(req.params.id);
    if (!address) return res.status(404).send("Address not found");

    const data = address.toJSON();
    await address.destroy();
    res.status(204).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchAddresses = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const results = await Customer_address.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { street: { [Op.iLike]: `%${query}%` } },
          { house: { [Op.iLike]: `%${query}%` } },
          { location: { [Op.iLike]: `%${query}%` } },
          { info: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });

    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
