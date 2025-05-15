import express from "express";

import "dotenv/config";

import { connectDB } from "./database/config.js";

import { getHome } from "./controllers/home.js";

import { userRouter } from "./routes/userRoute.js";

const app = express();

//Database connect
connectDB();

const PORT = process.env.PORT;

//home route
app.get("/", getHome);

//Routing
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
