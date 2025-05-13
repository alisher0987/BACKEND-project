const express = require("express");
const router = express.Router();
const Cart_itemController = require("../Controller/cart.itemController");

/**
 * @swagger
 * tags:
 *   name: Cart_item
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/cart_item:
 *   post:
 *     summary: Create a new cart_item
 *     tags: [Cart_item]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticked_id:
 *                 type: number
 *               cart_id:
 *                 type: number
 *               quantity:
 *                 type: number
 *     responses:
 *       '201':
 *         description: admin created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/cart_item", Cart_itemController.create);

/**
 * @swagger
 * /api/cart_item:
 *   get:
 *     summary: Get all cart_item
 *     tags: [Cart_item]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: cart_item created
 *       '500':
 *         description: Server error
 */
router.get("/cart_item", Cart_itemController.getAll);

/**
 * @swagger
 *  /api/cart_item/{id}:
 *    get:
 *      summary: Get cart_item by ID
 *      tags: [Cart_item]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: cart_item ID
 *          schema:
 *            type: integer
 *      responses:
 *        '201':
 *          description: cart_item details
 *        '400':
 *          description: cart_item not found
 *        '500':
 *          description: Server error
 */
router.get("/cart_item/:id", Cart_itemController.getById);

/**
 * @swagger
 * /api/cart_item/{id}:
 *   put:
 *     summary: Update cart_item by ID
 *     tags: [Cart_item]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: cart_item ID
 *         schema:
 *           type: integer
 *     responses:
 *       '201':
 *         description: cart_item updated
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: cart_item not found
 *       '500':
 *         description: Server error
 */
router.put("/cart_item/:id", Cart_itemController.update);

/**
 * @swagger
 * /api/cart_item/{id}:
 *   delete:
 *     summary: Delete cart_item by ID
 *     tags: [Cart_item]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: cart_item ID
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: cart_item deleted
 *       '404':
 *         description: cart_item not found
 *       '500':
 *         description: Server error
 */
router.delete("/cart_item/:id", Cart_itemController.delete);

module.exports = router;
