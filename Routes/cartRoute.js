const express = require("express");
const router = express.Router();
const CartController = require("../Controller/cartController");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Foydalanuvchilar boshqarish uchun API endpointlari
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Create a new cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: date
 *               finishedAt:
 *                 type: date
 *               stutus_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: admin created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post("/cart", CartController.create);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Get all cart_item
 *     tags: [Cart]
 *     description: Barcha foydalanuvchilar ro'yxatini olish
 *     responses:
 *       '201':
 *         description: cart_item created
 *       '500':
 *         description: Server error
 */
router.get("/cart", CartController.getAll);



/**
 * @swagger
 *  /api/cart/{id}:
 *    get:
 *      summary: Get cart_item by ID
 *      tags: [Cart]
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
router.get("/cart/:id", CartController.getById);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     summary: Update cart_item by ID
 *     tags: [Cart]
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
router.put("/cart/:id", CartController.update);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     summary: Delete cart_item by ID
 *     tags: [Cart]
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
router.delete("/cart/:id", CartController.delete);

module.exports = router;
