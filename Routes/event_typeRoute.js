const express = require('express');
const router = express.Router();
const Event_typeController = require('../Controller/eventtypeController');

/**
 * @swagger
 * tags:
 *   name: Event_type
 *   description: Ticket type management
 */

/**
 * @swagger
 * /api/event_type:
 *   post:
 *     tags: [Event_type]
 *     summary: Create a new ticket type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Ticket type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/event_type', Event_typeController.createEventType);

/**
 * @swagger
 * /api/event_type:
 *   get:
 *     tags: [Event_type]
 *     summary: List all ticket types
 *     responses:
 *       200:
 *         description: List of ticket types
 *       500:
 *         description: Server error
 */
router.get('/event_type', Event_typeController.getEventTypes);



/**
 * @swagger
 * /api/event_type/{id}:
 *   get:
 *     tags: [Event_type]
 *     summary: Get ticket type by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket type ID
 *     responses:
 *       200:
 *         description: Ticket type details
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Server error
 */
router.get('/event_type/:id', Event_typeController.getEventTypeById);

/**
 * @swagger
 * /api/event_type/{id}:
 *   put:
 *     tags: [Event_type]
 *     summary: Update ticket type by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Ticket type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Server error
 */
router.put('/event_type/:id', Event_typeController.updateEventType);

/**
 * @swagger
 * /api/event_type/{id}:
 *   delete:
 *     tags: [Event_type]
 *     summary: Delete ticket type by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket type ID
 *     responses:
 *       200:
 *         description: Ticket type deleted
 *       404:
 *         description: Ticket type not found
 *       500:
 *         description: Server error
 */
router.delete('/event_type/:id', Event_typeController.deleteEventType);

module.exports = router;