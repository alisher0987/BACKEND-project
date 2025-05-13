const express = require('express');
const router = express.Router();
const venueVenueTypeController = require('../Controller/venue_typesController');

/**
 * @swagger
 * tags:
 *   name: VenueVenueTypes
 *   description: Venue-VenueType relationship management
 */

/**
 * @swagger
 * /api/venueVenueTypes:
 *   post:
 *     tags: [VenueVenueTypes]
 *     summary: Link a venue with a venue type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               venue_type_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Venue-VenueType link created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/venueVenueTypes', venueVenueTypeController.createVenueVenuetype);

/**
 * @swagger
 * /api/venueVenueTypes:
 *   get:
 *     tags: [VenueVenueTypes]
 *     summary: List all venue-venue type links
 *     responses:
 *       200:
 *         description: List of venue-venue type links
 *       500:
 *         description: Server error
 */
router.get('/venueVenueTypes', venueVenueTypeController.getVenueVenuetypes);



/**
 * @swagger
 * /api/venueVenueTypes/{id}:
 *   get:
 *     tags: [VenueVenueTypes]
 *     summary: Get venue-venue type link by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Link ID
 *     responses:
 *       200:
 *         description: Venue-VenueType link details
 *       404:
 *         description: Link not found
 *       500:
 *         description: Server error
 */
router.get('/venueVenueTypes/:id', venueVenueTypeController.getVenueVenuetypeById);

/**
 * @swagger
 * /api/venueVenueTypes/{id}:
 *   put:
 *     tags: [VenueVenueTypes]
 *     summary: Update venue-venue type link by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Link ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               venue_type_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Venue-VenueType link updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Link not found
 *       500:
 *         description: Server error
 */
router.put('/venueVenueTypes/:id', venueVenueTypeController.updateVenueVenuetype);

/**
 * @swagger
 * /api/venueVenueTypes/{id}:
 *   delete:
 *     tags: [VenueVenueTypes]
 *     summary: Delete venue-venue type link by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Link ID
 *     responses:
 *       200:
 *         description: Link deleted
 *       404:
 *         description: Link not found
 *       500:
 *         description: Server error
 */
router.delete('/venueVenueTypes/:id', venueVenueTypeController.deleteVenueVenuetype);

module.exports = router;