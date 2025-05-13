const express = require('express');
const router = express.Router();
const ticketStatusController = require('../Controller/ticket_status');

/**
 * @swagger
 * tags:
 *   name: TicketStatuses
 *   description: Ticket status management
 */

/**
 * @swagger
 * /api/ticket-statuses:
 *   post:
 *     tags: [TicketStatuses]
 *     summary: Create a new ticket status
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
 *         description: Ticket status created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post('/ticket-statuses', ticketStatusController.createTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses:
 *   get:
 *     tags: [TicketStatuses]
 *     summary: List all ticket statuses
 *     responses:
 *       200:
 *         description: List of ticket statuses
 *       500:
 *         description: Server error
 */
router.get('/ticket-statuses', ticketStatusController.getTicketStatuses);



/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   get:
 *     tags: [TicketStatuses]
 *     summary: Get ticket status by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket status ID
 *     responses:
 *       200:
 *         description: Ticket status details
 *       404:
 *         description: Ticket status not found
 *       500:
 *         description: Server error
 */
router.get('/ticket-statuses/:id', ticketStatusController.getTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   put:
 *     tags: [TicketStatuses]
 *     summary: Update ticket status by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket status ID
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
 *         description: Ticket status updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket status not found
 *       500:
 *         description: Server error
 */
router.put('/ticket-statuses/:id', ticketStatusController.updateTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   delete:
 *     tags: [TicketStatuses]
 *     summary: Delete ticket status by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket status ID
 *     responses:
 *       200:
 *         description: Ticket status deleted
 *       404:
 *         description: Ticket status not found
 *       500:
 *         description: Server error
 */
router.delete('/ticket-statuses/:id', ticketStatusController.deleteTicketStatus);

module.exports = router;
