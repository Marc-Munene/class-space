import express from "express";

import "dotenv/config";

import { connectDB } from "./database/config.js";
import { getHome } from "./controllers/home.js";
import { userRouter } from "./routes/userRoute.js";
import { buildingRouter } from "./routes/buildingRoute.js";
import { roomRouter } from "./routes/roomRoute.js";

const app = express();

//Database connect
connectDB();

const PORT = process.env.PORT;

//home route
app.get("/", getHome);

//Routing
app.use("/api", userRouter, buildingRouter, roomRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
