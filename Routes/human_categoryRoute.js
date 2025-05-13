const express = require('express');
const router = express.Router();
const humanCategoryController = require(`../Controller/human_category`);

/**
 * @swagger
 * tags:
 *   name: HumanCategories
 *   description: Human Category management
 */

/**
 * @swagger
 * /api/human-categories:
 *   post:
 *     tags: [HumanCategories]
 *     summary: Create a new human category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: string
 *               finish_age:
 *                 type: string
 *               gender:
 *                 type: number
 *     responses:
 *       201:
 *         description: Human category created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/human-categories', humanCategoryController.createHumanCategory);

/**
 * @swagger
 * /api/human-categories:
 *   get:
 *     tags: [HumanCategories]
 *     summary: List all human categories
 *     responses:
 *       200:
 *         description: List of human categories
 *       500:
 *         description: Server error
 */
router.get('/human-categories', humanCategoryController.getHumanCategories);



/**
 * @swagger
 * /api/human-categories/{id}:
 *   get:
 *     tags: [HumanCategories]
 *     summary: Get human category by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Human category ID
 *     responses:
 *       200:
 *         description: Human category details
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
router.get('/human-categories/:id', humanCategoryController.getHumanCategoryById);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   put:
 *     tags: [HumanCategories]
 *     summary: Update human category by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Human category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: string
 *               finish_age:
 *                 type: string
 *               gender:
 *                 type: number
 *     responses:
 *       200:
 *         description: Human category updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
router.put('/human-categories/:id', humanCategoryController.updateHumanCategory);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   delete:
 *     tags: [HumanCategories]
 *     summary: Delete human category by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Human category ID
 *     responses:
 *       200:
 *         description: Human category deleted
 *       404:
 *         description: Human category not found
 *       500:
 *         description: Server error
 */
router.delete('/human-categories/:id', humanCategoryController.deleteHumanCategory);

module.exports = router;