import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyJobPage = () => {
  const [job, setJob] = useState(null); // Job state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state
  const [freelancerId, setFreelancerId] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchFreelancerIdAndJob = async () => {
      try {
        // Fetch freelancer ID
        const freelancerResponse = await axios.get(
          'http://localhost:4000/api/v1/freelancer/view_profile', 
          {
            headers: {
              Authorization:`Bearer ${token}`, 
            },
          }
        );
        const id = freelancerResponse.data.data._id;
        setFreelancerId(id);

        // Fetch job details after freelancer ID is set
        setLoading(true);
        setError('');
        
        const jobResponse = await axios.get(
          `http://localhost:4000/api/v1/freelancejobs/my_jobs/${id}`, 
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
        setJob(jobResponse.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch freelancer ID or job details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchFreelancerIdAndJob(); // Fetch freelancer ID and then job details on component mount
  }, [token]); // Run this effect when token changes

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {job && (
        <div>
          <h1>{job.title}</h1>
          <p>{job.description}</p>
          {/* Render other job details */}
        </div>
      )}
    </div>
  );
};

export default MyJobPage;