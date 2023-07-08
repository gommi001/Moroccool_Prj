import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import cafesRouter from "./routes/cafes.js";
import usersRouter from './routes/users.js';
import hotelsRouter from './routes/hotels.js';
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Offline!");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB Online!");
});

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/cafes", cafesRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/users", usersRouter);



app.listen(8000, () => {
  connect();
  console.log("Connected to backend.");
});