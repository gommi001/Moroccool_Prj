import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import hotelRoute from './routes/hotelsRoutes.js'
import eventRoute from './routes/eventsRoutes.js'
import userRoute from './routes/userRoutes.js'
import authRoute from './routes/authRoutes.js'
import cafeRoute from './routes/cafeRoutes.js'
import reviewsCafeRoute from './routes/reviewsCafeRoutes.js'
import reviewsHotelRoute from './routes/reviewsHotelRoutes.js'


const app = express();
dotenv.config();
const corsOptions = {
  origin:true,
  credentials:true
}

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
app.use(cors(corsOptions));
app.use('/api/hotels', hotelRoute);
app.use('/api/events', eventRoute);
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/cafes', cafeRoute);
app.use('/api/cafereview', reviewsCafeRoute);
app.use('/api/hotelreview', reviewsHotelRoute);


app.listen(5000, () => {
    connect();
    console.log("Connected to backend.");
  });
