import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
  console.log(req.path, req.method);
  next();
});
