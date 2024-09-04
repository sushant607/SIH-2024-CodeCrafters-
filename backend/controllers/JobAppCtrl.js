import { JobApplication } from '../models/JobApplication.js';  
import { Job } from '../models/jobs.js';  
import { Freelancer } from '../models/freelancer.js';  

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
    const jobApplication = new JobApplication({
      jobId,
      freelancerId,
      applicationStatus: "Accepted",  // Default status
    });
    await jobApplication.save();
    if (!job.Applicants.includes(freelancerId)) {
      job.Applicants.push(freelancerId);
      await job.save();  
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
