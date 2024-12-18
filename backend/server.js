var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');
require('dotenv').config();
var cors = require('cors');

var app = express();
var server = http.Server(app);
var port = process.env.PORT || 500;


app.use(cors({
    origin: 'https://biddut-frontend.vercel.app', // Allow only this origin
    methods: ['GET', 'POST'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type'], // Allow these headers
}));

// Middleware to parse JSON and serve static files
app.use(express.json()); // Parses JSON data from the request body


app.get('/', (req, res) => {
    res.send('API Working');
});


app.post("/send_email", function (req, res) {
  const { email, name, issue, message, address } = req.body; // Extract data from JSON request body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "aayushpanwar5178@gmail.com",
    subject: `Message from ${name} regarding ${issue}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}\n\nAddress: ${address}`,
    replyTo: email,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending email.');
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent successfully!');
  });
});

// Start the server
server.listen(port, function () {
  console.log('Server running on port ' + port);
});