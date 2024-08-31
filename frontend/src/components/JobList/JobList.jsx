import React, { useState,useEffect } from 'react';
import { HiOutlineBookmark } from "react-icons/hi2";
import axios from "axios";
function JobList() {
  const [search, setSearch] = useState("");
  const [workingSchedule, setWorkingSchedule] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem('token');
  useEffect(()=>{
    const func = async () => {
        const res = await axios.get("http://localhost:4000/api/v1/jobs/get_all_job", {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
          },
        })
        setJobs(res.data);
        // .then(response => setJobs(response.data))
        // .catch(error => console.error('Error fetching jobs:', error));
    }
    func();
  },[]);
  
  const handleWorkingScheduleChange = (e) => {
    const { value, checked } = e.target;
    setWorkingSchedule((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleEmploymentTypeChange = (e) => {
    const { value, checked } = e.target;
    setEmploymentType((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  
  // const jobs = [
  //   {
  //     id: 1,
  //     role: "Senior UI/UX Designer",
  //     job_description: "Design and implement user interfaces...",
  //     skills_required: ["Figma", "Sketch", "Adobe XD"],
  //     experience_level: "Mid Level",
  //     compensation: "$250/hr",
  //     project_duration: "Permanent",
  //     application_deadline: new Date("2024-09-15"),
  //     location_requirements: "On-site",
  //     contact_information: "hr@company.com",
  //     company_description: "A leading tech company...",
  //     Applicants: ["John Doe", "Jane Smith"],
  //     bgColor: "bg-orange-200",
  //     logo: "../../assets/AmazonLogo.jpg",
  //     company: "Amazon",
  //   },
  //   {
  //     id: 2,
  //     role: "Full Stack Web Developer",
  //     job_description: "Develop and maintain web applications...",
  //     skills_required: ["React", "Node.js", "MongoDB"],
  //     experience_level: "Senior Level",
  //     compensation: "$300/hr",
  //     project_duration: "Contract",
  //     application_deadline: new Date("2024-09-20"),
  //     location_requirements: "Remote",
  //     contact_information: "careers@company.com",
  //     company_description: "Innovating the future...",
  //     Applicants: ["Alice Johnson"],
  //     bgColor: "bg-green-200",
  //     logo: "../../assets/GoogleLogo.jpg",
  //     company: "Google",
  //   },
  //   {
  //     id: 3,
  //     role: "Full Stack Web Developer",
  //     job_description: "Develop and maintain web applications...",
  //     skills_required: ["React", "Node.js", "MongoDB"],
  //     experience_level: "Senior Level",
  //     compensation: "$300/hr",
  //     project_duration: "Contract",
  //     application_deadline: new Date("2024-09-20"),
  //     location_requirements: "Remote",
  //     contact_information: "careers@company.com",
  //     company_description: "Innovating the future...",
  //     Applicants: ["Alice Johnson"],
  //     bgColor: "bg-purple-200",
  //     logo: "../../assets/GoogleLogo.jpg",
  //     company: "Google",
  //   },
  //   {
  //     id: 4,
  //     role: "Full Stack Web Developer",
  //     job_description: "Develop and maintain web applications...",
  //     skills_required: ["React", "Node.js", "MongoDB"],
  //     experience_level: "Senior Level",
  //     compensation: "$300/hr",
  //     project_duration: "Contract",
  //     application_deadline: new Date("2024-09-20"),
  //     location_requirements: "Remote",
  //     contact_information: "careers@company.com",
  //     company_description: "Innovating the future...",
  //     Applicants: ["Alice Johnson"],
  //     bgColor: "bg-blue-100",
  //     logo: "../../assets/GoogleLogo.jpg",
  //     company: "Google",
  //   },
  //   {
  //     id: 5,
  //     role: "Full Stack Web Developer",
  //     job_description: "Develop and maintain web applications...",
  //     skills_required: ["React", "Node.js", "MongoDB"],
  //     experience_level: "Senior Level",
  //     compensation: "$300/hr",
  //     project_duration: "Contract",
  //     application_deadline: new Date("2024-09-20"),
  //     location_requirements: "Remote",
  //     contact_information: "careers@company.com",
  //     company_description: "Innovating the future...",
  //     Applicants: ["Alice Johnson"],
  //     bgColor: "bg-pink-100",
  //     logo: "../../assets/GoogleLogo.jpg",
  //     company: "Google",
  //   },
  //   {
  //     id: 6,
  //     role: "Full Stack Web Developer",
  //     job_description: "Develop and maintain web applications...",
  //     skills_required: ["React", "Node.js", "MongoDB"],
  //     experience_level: "Senior Level",
  //     compensation: "$300/hr",
  //     project_duration: "Contract",
  //     application_deadline: new Date("2024-09-20"),
  //     location_requirements: "Remote",
  //     contact_information: "careers@company.com",
  //     company_description: "Innovating the future...",
  //     Applicants: ["Alice Johnson"],
  //     bgColor: "bg-gray-200",
  //     logo: "../../assets/GoogleLogo.jpg",
  //     company: "Google",
  //   },
  // ];
  function formatDate(isoString) {
    // Convert to Date object
    const dateObj = new Date(isoString);
  
    // Check if the date is valid
    if (isNaN(dateObj.getTime())) {
      return "Invalid date";
    }
  
    // Format the date to a readable string
    return dateObj.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',  // Full month name (e.g., "September")
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true  // 12-hour clock format
    });
  }
  const filteredJobs = jobs.filter((job) => {
    const searchTerm = search.toLowerCase();
    const matchesSearch =
      searchTerm === "" ||
      job.role.toLowerCase().includes(searchTerm) ||
      // job.company.toLowerCase().includes(searchTerm) ||
      job.location_requirements.toLowerCase().includes(searchTerm);

    const matchesWorkingSchedule =
      workingSchedule.length === 0 ||
      workingSchedule.includes(job.project_duration);

    const matchesEmploymentType =
      employmentType.length === 0 ||
      employmentType.includes(job.location_requirements);

    return matchesSearch && matchesWorkingSchedule && matchesEmploymentType;
  });

  return (
    <>
      <div className='text-black h-fit bg-white pb-20'>
        {/* Left Part */}
        <div className='flex h-fit items-center'>
          <div className='w-1/3'>
            {/* Filters Section */}
            <div className='text-left ml-6'>
              <p className='text-xl font-semibold'>Filters</p>
              <div className='flex flex-col space-y-2 mt-4'>
                <p className='text-gray-400'>Working Schedule</p>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Short Term"
                    onChange={handleWorkingScheduleChange}
                  />
                  Short Term
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Long Term"
                    onChange={handleWorkingScheduleChange}
                  />
                  Long Term
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Contract"
                    onChange={handleWorkingScheduleChange}
                  />
                  Contract
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Permanent"
                    onChange={handleWorkingScheduleChange}
                  />
                  Permanent
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-gray-400 mt-4">Location Requirements</p>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Remote"
                    onChange={handleEmploymentTypeChange}
                  />
                  Remote
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="On-site"
                    onChange={handleEmploymentTypeChange}
                  />
                  On-site
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Hybrid"
                    onChange={handleEmploymentTypeChange}
                  />
                  Hybrid
                </span>
              </div>
            </div>
          </div>

          {/* Right Part - Display Jobs */}
          <div className="mt-4 pb-10">
            <div className="flex justify-between">
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="bg-white border-2 border-black px-3 py-2 w-[120px] focus:border-none outline-none rounded-md shadow-md text-lg font-mono transition-[width] duration-300 focus:outline focus:outline-blue-500 focus:shadow-none focus:w-[230px] placeholder:text-blue-500"
                name="text"
                type="text"
              />
            </div>

            <div className="grid grid-cols-3 gap-16 my-4 h-screen">
              {filteredJobs.map((job) => (
                <div
                  key={job._id}
                  className="w-fit h-fit rounded-xl bg-white text-black p-1 border-2 border-black"
                >
                  <div className={`${job.bgColor} m-2 rounded-lg h-fit`}>
                    <span className="flex justify-between items-center pt-2 mr-2">
                    <p className="bg-white w-24 text-xs p-2 rounded-full ml-4">
  {formatDate(job.application_deadline)}
</p>

                      <HiOutlineBookmark className="w-10 h-10 p-2 rounded-full bg-white" />
                    </span>
                    <p className="font-bold mt-5 text-left ml-3 text-xs">
                      {job.company}
                    </p>
                    <span>
                      <p className="text-lg font-semibold text-left ml-3">
                        {job.role}
                      </p>
                      <img src={job.logo} alt={`${job.company} logo`} />
                    </span>
                    <span className="flex flex-wrap mt-4 mb-2 pb-1 pl-2 text-center ">
                      {job.skills_required.map((skill, index) => (
                        <p
                          key={index}
                          className="w-20 text-xs mr-2 flex justify-center items-center p-1 mb-2 rounded-full border-2 border-black "
                        >
                          {skill}
                        </p>
                      ))}
                    </span>
                  </div>
                  <div className="flex justify-between my-3">
                    <span className="text-left ml-3">
                      <p className="font-bold">{job.compensation}</p>
                      <p className="text-gray-500">{job.location_requirements}</p>
                    </span>
                    <button className="bg-black text-white rounded-full w-20 p-1">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobList;
