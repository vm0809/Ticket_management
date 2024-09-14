# Ticket_management
Ticket System with Email Reminder This project is a simple ticket management system built using Node.js and MongoDB. It allows users to submit problems, each of which is assigned a unique ticket number. The system stores these tickets in a MongoDB database, along with their details such as the problem description, ticket number, and the user's email address.

The project includes:

Backend: Developed with Node.js and Express.js, providing RESTful APIs to handle ticket creation and data management.
Database: MongoDB is used to store tickets with fields for problem description, ticket number, creation date, deadline, and email address.
Frontend: A basic HTML form styled with CSS for users to submit their problems and view the assigned ticket number.
Email Reminders: A scheduled task that sends reminder emails one day before the ticket's deadline to ensure timely resolution of issues.
Features:

Unique ticket numbers with automatic generation.
Deadline management with a three-day resolution window.
Email notifications to remind users about upcoming deadlines.
Installation:

Clone the repository.
Run npm install to install dependencies.
Set up your MongoDB instance and update the connection string in server.js.
Start the server using node server.js.
Usage:

Open index.html in a browser to access the problem submission form.
Submit problems and check the console for server logs and MongoDB updates.
Feel free to contribute to the project or use it as a reference for building your own ticket management system!


