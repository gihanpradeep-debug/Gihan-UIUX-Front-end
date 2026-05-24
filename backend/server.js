import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse JSON in the body of requests

// POST route to send email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter (Nodemailer setup)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Gmail as email provider
    auth: {
      user: process.env.SMTP_USER,   // Your Gmail address
      pass: process.env.SMTP_PASS,   // Your Gmail app password
    },
  });

  // Define email options
  const mailOptions = {
    from: `"${name}" <${email}>`,  // From email address
    to: process.env.RECEIVER_EMAIL, // Where to send the email (your email)
    subject: 'New Contact Form Submission',
    text: `Message from: ${name} (${email})\n\n${message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ message: 'Failed to send email' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
