const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Initialize Express app
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Route to handle contact form submission
app.post("/sendMessage", async (req, res) => {
  const {name, email, message} = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender info
    to: gmailEmail, // Recipient email
    subject: "New Contact Form Message",
    text:
      `You received a message from:\nName: ${name}\nEmail: ${email}\n` +
      `Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).send({status: "Message sent successfully!"});
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send({status: "Failed to send message"});
  }
});

// Handle other API requests
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the backend!");
});

// Export as Firebase function
exports.api = functions.https.onRequest(app);
