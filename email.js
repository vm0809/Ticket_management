const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Email sending logic using Nodemailer
const sendReminderEmail = (ticket) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: ticket.email,
        subject: 'Ticket Reminder',
        text: `Reminder: Your ticket #${ticket.ticketNumber} is due tomorrow. Please resolve the issue before the deadline.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

// Schedule email reminders one day before the deadline
const scheduleEmailReminder = (ticket) => {
    const deadline = new Date(ticket.deadline);
    const reminderDate = new Date(deadline);
    reminderDate.setDate(reminderDate.getDate() - 1); // 1 day before deadline

    // Calculate cron time for the reminder
    const cronTime = `${reminderDate.getMinutes()} ${reminderDate.getHours()} ${reminderDate.getDate()} ${reminderDate.getMonth() + 1} *`;

    // Schedule the reminder
    cron.schedule(cronTime, () => {
        sendReminderEmail(ticket);
    });
};

module.exports = { scheduleEmailReminder };
