const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const bodyParser = require('body-parser');
const Ticket = require('./ticketModel'); // Import the Ticket model
const { scheduleEmailReminder } = require('./email'); // Import the email reminder

const app = express();
app.use(bodyParser.json());
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes


// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ticketDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// API to handle problem submissions
app.post('/submitProblem', async (req, res) => {
    try {
        const { problem, email } = req.body;
        // Generate a unique ticket number with a '#' prefix
        const ticketNumber = '#' + Math.floor(Math.random() * 1000000).toString();
        const createdDate = new Date();
        const deadline = new Date(createdDate);
        deadline.setDate(deadline.getDate() + 3); // Set the deadline to 3 days later

        // Create a new ticket
        const newTicket = new Ticket({
            problem,
            ticketNumber,
            createdDate,
            deadline,
            email,
            status: 'open'
        });

        await newTicket.save(); // Save the ticket in the database

        // Schedule the email reminder for one day before the deadline
        scheduleEmailReminder(newTicket);

        res.status(200).json({ message: 'Problem submitted successfully', ticketNumber });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting the problem' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
