import express from "express";
import pool from '../dbConfig/db.js';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);
        //Email check
        if (users.rows.length === 0) return res.status(401).json({ error: "Email is incorrect" });
        //PASSWORD CHECK
        const validPassword = await bcrypt.compare(password, users.rows[0].user_password);
        if (!validPassword) return res.status(401).json({ error: "Incorrect password" });
        return res.status(200).json({message:"Login Successfully"})
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});
export default router;
// router.post('/login', async (req, res) => {
//     try {
//         const {phone} = req.body;
//         const users = await pool.query('SELECT * FROM users WHERE user_phone = $1', [phone]);
//         //phone number check
//         if (users.rows.length === 0) return res.status(401).json({ error: "Phone number is incorrect" });
//         return res.status(200).json({message:"Login Successfully"})
//     } catch (error) {
//       res.status(500).json({error: error.message});
//     }
//   });   
// export default router;