const express = require('express');
const router = express.Router();
const venueTypeController = require('../Controller/venue_typeController');

/**
 * @swagger
 * tags:
 *   name: VenueTypes
 *   description: Venue type management
 */

/**
 * @swagger
 * /api/venueTypes:
 *   post:
 *     tags: [VenueTypes]
 *     summary: Create a new venue type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Venue type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/venueTypes', venueTypeController.createVenueType);

/**
 * @swagger
 * /api/venueTypes:
 *   get:
 *     tags: [VenueTypes]
 *     summary: List all venue types
 *     responses:
 *       200:
 *         description: List of venue types
 *       500:
 *         description: Server error
 */
router.get('/venueTypes', venueTypeController.getVenueTypes);



/**
 * @swagger
 * /api/venueTypes/{id}:
 *   get:
 *     tags: [VenueTypes]
 *     summary: Get venue type by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue type ID
 *     responses:
 *       200:
 *         description: Venue type details
 *       404:
 *         description: Venue type not found
 *       500:
 *         description: Server error
 */
router.get('/venueTypes/:id', venueTypeController.getVenueTypeById);

/**
 * @swagger
 * /api/venueTypes/{id}:
 *   put:
 *     tags: [VenueTypes]
 *     summary: Update venue type by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Venue type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue type not found
 *       500:
 *         description: Server error
 */
router.put('/venueTypes/:id', venueTypeController.updateVenueType);

/**
 * @swagger
 * /api/venueTypes/{id}:
 *   delete:
 *     tags: [VenueTypes]
 *     summary: Delete venue type by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue type ID
 *     responses:
 *       200:
 *         description: Venue type deleted
 *       404:
 *         description: Venue type not found
 *       500:
 *         description: Server error
 */
router.delete('/venueTypes/:id', venueTypeController.deleteVenueType);

module.exports = router;
