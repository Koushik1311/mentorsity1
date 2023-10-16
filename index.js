import express from 'express';
const json = express;
import cors from 'cors';

import usersRouter from './routes/users-routes.js';
import authRouter from './routes/auth-routes.js';
import lgnMblOtp from './routes/lgnMblOtp-routes.js';
import lgnFBorGle from './routes/lgn-facebook-route.js';

import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { credentials: true, origin: process.env.URL || '*' };

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.use('/', express.static(join(__dirname, 'public')))
app.use('/api/lgn-pwd', authRouter);
app.use('/api/rgt-usr', usersRouter);
app.use('/api/lgn-otp', lgnMblOtp);
app.use('/api/lgn-auth2.0', lgnFBorGle);



app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
})