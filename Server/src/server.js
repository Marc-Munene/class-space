import express from "express";

import "dotenv/config";
import { connectDB } from "./database/config.js";

const app = express();

//Database connect
connectDB()

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
