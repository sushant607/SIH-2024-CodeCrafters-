import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import { router as userRoutes } from "./routes/userRoutes.js";

//dotenv conig
dotenv.config();

//connect to database
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);

//port
const port = process.env.PORT || 4000;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});