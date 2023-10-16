import express from "express";
import pool from '../dbConfig/db.js';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

// Validation function for email format
function isValidEmail(email) {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
}

// Middleware for validating request body
function validateUserInput(req, res, next) {
  const { name, phone, email, password } = req.body;

  // Check if name is at least 3 characters long
  if (name.length < 3) {
    return res.status(400).json({ error: 'Name should be at least 3 characters long' });
  }

  // Check if phone number is exactly 10 digits
  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({ error: 'Phone number should be 10 digits only' });
  }

  // Check if email is valid
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // Check if password meets criteria (e.g., at least 6 characters and contains letters, numbers, and special characters)
  const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error: 'Password should be at least 6 characters and contain letters, numbers, and special characters',
    });
  }
  // Continue to the next middleware or route handler if validation passes
  next();
}


router.get('/', async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json({ users: users.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', validateUserInput, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await pool.query(
      'INSERT INTO users (user_name,user_phone,user_email,user_password) VALUES ($1,$2,$3,$4) RETURNING *'
      , [req.body.name, req.body.phone, req.body.email, hashedPassword]);
    res.json(newUser.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;