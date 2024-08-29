import { user } from "../models/user.js";
import { Job } from '../models/jobs.js';
import { Organisation } from "../models/employee.js";

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
    const job = await Job.findById(req.params.id); 
    if (!job) {
      return res.status(404).json({ message: "Job not found" }); 
    }
    res.status(200).json(job); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
};

// Update job
const updateJobController = async (req, res) => {
  try {
    const jobs = await Job.findOneAndUpdate(
      { _id: req.params.id },  
      req.body,          
    );
    res.status(201).send({
      success: true,
      message: "Job Profile Updated"
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Job Profile Update issue",
      error,
    });
  }
};

// Delete job
const deleteJobController = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).send({ message: "Job not found", success: false });
    }
    res.status(200).send({ message: "Job deleted successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Job Profile Delete issue",
      error,
    });
  }
};

// View jobs company specific
const viewJobsCompanySpecific = async (req, res) => {
  try {
    const organization = await Organisation.findById(req.params.companyId).populate('Jobs_offered');

    if (!organization) {
      return res.status(404).send({ message: "Company not found", success: false });
    }

    const jobs = await Job.find({ _id: { $in: organization.Jobs_offered } });

    res.status(200).json({
      success: true,
      company: organization.Company_name,
      jobs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving jobs for the company', error });
  }
}

// Applications




export { createJobController, getAllJobsController, getJobByIdController, updateJobController, deleteJobController, viewJobsCompanySpecific };

