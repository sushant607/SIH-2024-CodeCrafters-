import express from 'express';
import { createJobApplication } from '../controllers/JobAppCtrl.js';
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

// Route for applying to a job
router.post("/apply",authMiddleware, createJobApplication);

export { router};
