import express from "express";
import pool from "../dbConfig/db.js";
import nodemailer from "nodemailer";
import randomstring from "randomstring";
import bodyParser from "body-parser";
import config from "../dbConfig/config.js";
import password from "password";
import bcrypt from "bcrypt";

let forget_password = express.Router();
forget_password.use(bodyParser.json());
forget_password.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const sendResetPasswordMail = async (email, token) => {
  console.log(email);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: config.emailUser,
        pass: config.emailPassword,
      },
    });
    const mailOptions = {
      from: config.emailUser,
      to: email,
      subject: "For Reset Password",
      html: `<p> Hii  Please click on the link and <a href="http://localhost:3000/password/new?token=${token}">reset your password</a></p>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Mail has been sent :- ", info.response);
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
forget_password = async (req, res) => {
  const { email } = req.body;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [email]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "This email does not exists" });
    }
    const resetToken = randomstring.generate(12);
    // Update the user's resetToken in the database.
    const updateQuery =
      "UPDATE users SET user_token = $1 WHERE user_email = $2";
    await pool.query(updateQuery, [resetToken, email]);
    sendResetPasswordMail(email, resetToken);
    res.status(200).send({
      success: true,
      message: "Please check your mail inbox. And reset your password",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const securePassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const reset_password = async (req, res) => {
  try {
    const { token } = req.query;
    const { password } = req.body;
    const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error:
          "New Password should be at least 6 characters and contain letters, numbers, and special characters",
      });
    }
    const newPassword = await securePassword(password);
    const updatePassword = `update users set user_password =$1 where user_token=$2`;
    const values = [newPassword, token];
    await pool.query(updatePassword, values);
    res
      .status(200)
      .send({ success: true, msg: "User password has been reset" });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

export const userController = { forget_password, reset_password };
