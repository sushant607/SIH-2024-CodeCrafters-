import express from "express";
import { createJobController, getAllJobsController, getJobByIdController } from "../controllers/jobsCtrl.js";

const router = express.Router();

//routes
//CREATE_JOB || POST
router.post("/create_job", createJobController);

//VIEW_ALL_JOBS || GET
router.get("/get_all_job", getAllJobsController);

//VIEW_JOB || GET
router.get("/get_id_job/:id", getJobByIdController);

export { router };