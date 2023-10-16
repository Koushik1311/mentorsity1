import express from "express";
import pool from "../dbConfig/db.js";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import twilio from "twilio";
import { userController } from "../controller/userController.js";

const sid = "AC15911325008dc5935fafa11ceaf1830f";
const auth_token = "015e3adcfe3426c75ef1ac4a7b4f5fbf";
const client = twilio(sid, auth_token);

const router = express.Router();
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

router.post("/login-pwd", async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [email]
    );
    //Email check
    if (users.rows.length === 0)
      return res.status(401).json({ error: "Email is incorrect" });
    //PASSWORD CHECK
    const validPassword = await bcrypt.compare(
      password,
      users.rows[0].user_password
    );
    if (!validPassword)
      return res.status(401).json({ error: "Incorrect password" });
    return res.status(200).json({ message: "Login Successfully" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

let OTP;
router.post("/login-otp", async (req, res) => {
  try {
    const { phone } = req.body;
    //fetch mobile number
    const users = await pool.query(
      "SELECT * FROM users WHERE user_phone = $1",
      [phone]
    );
    //phone number check
    if (users.rows.length === 0)
      return res.status(401).json({ error: "Phone number is incorrect" });

    //console.log(phone);

    //generate otp
    let digits = "0123456789";
    OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }

    await client.messages.create({
      body: `Your OTP from DevTown for user login is :${OTP}`,
      from: "+12513175182",
      to: `+91${phone}`,
    });

    return res.status(200).json({ message: "One time login OTP sent" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login-otp/verify", async (req, res) => {
  try {
    const { otp } = req.body;
    if (otp != OTP) return res.status(400).json({ error: "Incorrect OTP" });
    return res.status(200).json({ message: "Login Sccessfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Middleware for validating request body
function validateUserInput(req, res, next) {
  const { email, oldPassword, newPassword } = req.body;
  // Check if password meets criteria (e.g., at least 6 characters and contains letters, numbers, and special characters)
  const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;
  if (!passwordRegex.test(newPassword)) {
    return res.status(400).json({
      error:
        "New Password should be at least 6 characters and contain letters, numbers, and special characters",
    });
  }
  // Continue to the next middleware or route handler if validation passes
  next();
}
//change password
router.post("/change-password", validateUserInput, async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  try {
    // Check if the email exists in the database
    const userQuery = "SELECT user_password FROM users WHERE user_email = $1";
    const { rows } = await pool.query(userQuery, [email]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Email not exist" });
    }
    const validPassword = await bcrypt.compare(
      oldPassword,
      rows[0].user_password
    );
    // Compare oldPassword with the password which is in db
    if (!validPassword) {
      return res.status(401).json({ message: "Incorrect old password" });
    }
    if (oldPassword === newPassword)
      return res
        .status(400)
        .json({ message: "New password should not be same as old password" });
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // Update the password
    const updateQuery =
      "UPDATE users SET user_password = $1 WHERE user_email = $2";
    await pool.query(updateQuery, [hashedPassword, email]);
    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/forgot-password", userController.forget_password);
router.post("/reset-password", userController.reset_password);

export default router;
