const express = require('express');
const router = express.Router();
const venuePhotoController = require('../Controller/venue_photoController');

/**
 * @swagger
 * tags:
 *   name: VenuePhotos
 *   description: Venue photo management
 */

/**
 * @swagger
 * /api/venuePhotos:
 *   post:
 *     tags: [VenuePhotos]
 *     summary: Upload a new venue photo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Venue photo uploaded
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/venuePhotos', venuePhotoController.createVenuePhoto);

/**
 * @swagger
 * /api/venuePhotos:
 *   get:
 *     tags: [VenuePhotos]
 *     summary: List all venue photos
 *     responses:
 *       200:
 *         description: List of venue photos
 *       500:
 *         description: Server error
 */
router.get('/venuePhotos', venuePhotoController.getVenuePhotos);



/**
 * @swagger
 * /api/venuePhotos/{id}:
 *   get:
 *     tags: [VenuePhotos]
 *     summary: Get venue photo by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue photo ID
 *     responses:
 *       200:
 *         description: Venue photo details
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.get('/venuePhotos/:id', venuePhotoController.getVenuePhotoById);

/**
 * @swagger
 * /api/venuePhotos/{id}:
 *   put:
 *     tags: [VenuePhotos]
 *     summary: Update venue photo by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue photo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Venue photo updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.put('/venuePhotos/:id', venuePhotoController.updateVenuePhoto);

/**
 * @swagger
 * /api/venuePhotos/{id}:
 *   delete:
 *     tags: [VenuePhotos]
 *     summary: Delete venue photo by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue photo ID
 *     responses:
 *       200:
 *         description: Venue photo deleted
 *       404:
 *         description: Venue photo not found
 *       500:
 *         description: Server error
 */
router.delete('/venuePhotos/:id', venuePhotoController.deleteVenuePhoto);

module.exports = router;