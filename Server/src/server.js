import express from "express";

import "dotenv/config";

import { connectDB } from "./database/config.js";
import { getHome } from "./controllers/home.js";

const app = express();

//Database connect
connectDB();

const PORT = process.env.PORT;

app.get("/", getHome);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
