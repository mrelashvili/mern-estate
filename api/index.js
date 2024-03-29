import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to mongo')
}).catch((err) => console.log('err', err))

const app = express();
app.use(express.json()); // by default we can't send any JSON to the server

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";
  res.status(statusCode).json({ success: false, statusCode, message })
  next();
})