const { Delivery_method } = require("../models");
const { validateDelivery_method } = require("../validation/delivery_methodVal");

exports.createDeliveryMethod = async (req, res) => {
  const { error } = validateDelivery_method(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const deliveryMethod = await Delivery_method.create(req.body);
    res.status(201).send(deliveryMethod);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDeliveryMethods = async (req, res) => {
  try {
    const deliveryMethods = await Delivery_method.findAll();
    res.status(200).send(deliveryMethods);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDeliveryMethodById = async (req, res) => {
  try {
    const deliveryMethod = await Delivery_method.findByPk(req.params.id);
    if (!deliveryMethod) return res.status(404).send("Delivery method not found");

    res.status(200).send(deliveryMethod);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDeliveryMethod = async (req, res) => {
  const { error } = validateDeliveryMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const deliveryMethod = await Delivery_method.findByPk(req.params.id);
    if (!deliveryMethod) return res.status(404).send("Delivery method not found");

    await deliveryMethod.update(req.body);
    res.status(200).send(deliveryMethod);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDeliveryMethod = async (req, res) => {
  try {
    const deliveryMethod = await Delivery_method.findByPk(req.params.id);
    if (!deliveryMethod) return res.status(404).send("Delivery method not found");

    const data = deliveryMethod.toJSON();
    await deliveryMethod.destroy();
    res.status(204).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
