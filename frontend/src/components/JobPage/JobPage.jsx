import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams(); // Use  job ID from URL params
  const token = localStorage.getItem("token"); // Auth token
  const [job, setJob] = useState({});
  const [isApplying, setIsApplying] = useState(false); // To handle apply button state

  // Fetch the job details
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/jobs/get_id_job/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setJob(res.data);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };
    fetchJob();
  }, [id, token]);

  // Function to handle job application
  const applyForJob = async () => {
    setIsApplying(true);
    try {
      const applicationData = {
        jobId: id,
        freelancerId: f_id, // Use freelancer ID from URL params
      };

      const res = await axios.post(
        "http://localhost:4000/api/v1/freelancer/apply",
        applicationData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to apply for the job.");
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
            <div className="text-center xl:col-span-1 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900">
                {job.contact_information}
              </h1>
              <h2 className="text-4xl font-bold text-gray-900">{job.role}</h2>
              <p className="mt-2 text-lg text-gray-600">
                {job.job_description}
              </p>

              <button
                onClick={applyForJob}
                disabled={isApplying}
                className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white bg-gray-900 rounded hover:bg-gray-600"
              >
                {isApplying ? "Applying..." : "Apply"}
              </button>

              <div className="mt-8">
                <blockquote className="mt-6">
                  <p className="text-lg font-bold text-gray-900">
                    About the company
                  </p>
                  <p className="mt-3 text-base text-gray-600">
                    {job.company_description}
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="xl:col-span-1">
              <img
                className="w-full mx-auto"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobPage;
