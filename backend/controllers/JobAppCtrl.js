import { JobApplication } from "../models/JobApplication.js"; // Import the JobApplication model
import { Job } from "../models/jobs.js"; // Import the Job model to update Applicants array
import { Freelancer } from "../models/freelancer.js"; // Import the Freelancer model

const createJobApplication = async (req, res) => {
  try {
    const { jobId, userId } = req.body;
    console.log(userId);
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    const freelancer = await Freelancer.findOne({ userId });
    if (!freelancer) {
      return res.status(404).json({ message: "Freelancer not found" });
    }
    console.log(freelancer);

    const freelancerId = freelancer._id;

    // Create the job application
    const jobApplication = new JobApplication({
      jobId,
      freelancerId,
      applicationStatus: "Accepted", // Default status
    });

    // Save the job application
    await jobApplication.save();

    // Add freelancerId to the Applicants array in the Job document
    if (!job.Applicants.includes(freelancerId)) {
      job.Applicants.push(freelancerId);
      await job.save(); // Save the updated Job document
    }

    // Return success response
    return res.status(201).json({
      message: "Job application submitted successfully",
      jobApplication,
    });
  } catch (error) {
    console.error("Error submitting job application:", error);
    return res.status(500).json({ message: "Server error, please try again" });
  }
};

export { createJobApplication };
