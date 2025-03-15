import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config ();
import cookieParser from 'cookie-parser';
import session from 'express-session';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import reportRoutes from './routes/reportRoutes.js';
import adminRoutes from "./routes/adminRoutes.js";
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import cors from 'cors';
// import express from 'express';

connectDB (); // MongoDB connect

// const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express ();

// Body parser middleware
app.use (cors ());
app.use (express.json ());
app.use (express.urlencoded ({extended: true}));

// Cookie parser middleware
app.use (cookieParser ());

app.use (session ({secret: 'blahblahblah'}));

app.get ('/', (req, res) => {
  res.send ('Api is running...');
});


app.use ('/api/users', userRoutes);
app.use ('/api/project', projectRoutes);
app.use ('/api/quiz', quizRoutes);
app.use ('/api/reports', reportRoutes);
app.use("/api/admin", adminRoutes); 
const __dirname = path.resolve ();

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve ();
  app.use ('/uploads', express.static ('/var/data/uploads'));
  app.use (express.static (path.join (__dirname, '/frontend/build')));

  app.get ('*', (req, res) =>
    res.sendFile (path.resolve (__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  const __dirname = path.resolve ();
  app.use ('/uploads', express.static (path.join (__dirname, '/uploads')));
  app.get ('/', (req, res) => {
    res.send ('API is running....');
  });
}

app.use (notFound);
app.use (errorHandler);

app.listen (port, () => console.log (`Server running on port ${port}`));
