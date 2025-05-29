import express from "express";

import "dotenv/config";

import cors from "cors";

//routes
import { connectDB } from "./database/config.js";
import { getHome } from "./controllers/home.js";
import { userRouter } from "./routes/userRoute.js";
import { buildingRouter } from "./routes/buildingRoute.js";
import { roomRouter } from "./routes/roomRoute.js";
import { bookingRouter } from "./routes/bookingRoute.js";
import { notificationRouter } from "./routes/notificationRoute.js";
import { authRouter } from "./routes/authRoute.js";

//cookie parser
import cookieParser from "cookie-parser";

//user authenication middleware
import { userAuthentication } from "./middleware/AuthMiddleware.js";

const app = express();

//cors
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));

//PORT
const PORT = process.env.PORT;

//cookie parser middleware
app.use(cookieParser());

//middleware
app.use(express.json());

//Database connect
connectDB();

//home route
app.get("/", getHome);

//Routing
app.use(
  "/api",
  authRouter,
  userAuthentication,
  userRouter,
  buildingRouter,
  roomRouter,
  bookingRouter,
  notificationRouter
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
