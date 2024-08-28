import  jwt from 'jsonwebtoken' ;
import { user } from "../models/user.js";
import { Job } from '../models/jobs.js';

// Create job
const createJobController = async (req, res) => {
  try {
    const newJob = new Job(req.body); 
    const savedJob = await newJob.save(); 
    res.status(201).json(savedJob); 
  } catch (error) {
    res.status(400).json({ message: error.message }); 
  }
};

// Get all jobs
const getAllJobsController = async (req, res) => {
  try {
    const jobs = await Job.find(); 
    res.status(200).json(jobs); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

// Get a single job by ID
const getJobByIdController = async (req, res) => {
  try {
    console.log("Route hit with ID:", req.params.id);
    const job = await Job.findById(req.params.id); 
    if (!job) {
      return res.status(404).json({ message: "Job not found" }); 
    }
    res.status(200).json(job); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

export { createJobController, getAllJobsController, getJobByIdController };

