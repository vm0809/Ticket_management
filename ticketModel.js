const mongoose = require('mongoose');

// Define the schema for a ticket
const ticketSchema = new mongoose.Schema({
    problem: { type: String, required: true },
    ticketNumber: { type: String, required: true },
    createdDate: { type: Date, required: true },
    deadline: { type: Date, required: true },
    email: { type: String, required: true },
    status: { type: String, default: 'open' }
});

// Create the model based on the schema
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
