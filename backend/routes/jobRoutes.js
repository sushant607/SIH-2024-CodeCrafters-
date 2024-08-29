import express from "express";
import { createJobController, getAllJobsController, getJobByIdController } from "../controllers/jobsCtrl.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routes
//CREATE_JOB || POST
router.post("/create_job", authMiddleware, createJobController);

//VIEW_ALL_JOBS || GET
router.get("/get_all_job", authMiddleware, getAllJobsController);

//VIEW_JOB || GET
router.get("/get_id_job/:id", authMiddleware, getJobByIdController);

export { router };