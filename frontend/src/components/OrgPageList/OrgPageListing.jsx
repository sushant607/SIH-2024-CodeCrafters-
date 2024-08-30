import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { PiBagFill } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi2";
function OrgPageListing() {
    const [search, setSearch] = useState("");
    const [workingSchedule, setWorkingSchedule] = useState([]);
    const [employmentType, setEmploymentType] = useState([]);

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
    const jobs = [
        {
          id: 1,
          company: "Amazon",
          title: "Senior UI/UX Designer",
          datePosted: "20 May, 2024",
          salary: "$250 /hr",
          location: "San Francisco, CA",
          employmentTypes: ["Part time"],
          bgColor: "bg-orange-200",
          logo: "../../assets/AmazonLogo.jpg",
        },
        {
          id: 2,
          company: "Google",
          title: "Full Stack Web Developer",
          datePosted: "20 May, 2024",
          salary: "$250 /hr",
          location: "San Francisco, CA",
          employmentTypes: ["Distant"],
          bgColor: "bg-green-200",
          logo: "../../assets/AmazonLogo.jpg",
        },
        {
          id: 3,
          company: "Facebook",
          title: "Senior UI/UX Designer",
          datePosted: "20 May, 2024",
          salary: "$250 /hr",
          location: "San Francisco, CA",
          employmentTypes: ["Project Work"],
          bgColor: "bg-purple-200",
          logo: "../../assets/AmazonLogo.jpg",
        },
        {
          id: 4,
          company: "Amazon",
          title: "Senior UI/UX Designer",
          datePosted: "20 May, 2024",
          salary: "$250 /hr",
          location: "San Francisco, CA",
          employmentTypes: ["Part time"],
          bgColor: "bg-blue-100",
          logo: "../../assets/AmazonLogo.jpg",
        },
        {
          id: 5,
          company: "Amazon",
          title: "Senior UI/UX Designer",
          datePosted: "20 May, 2024",
          salary: "$250 /hr",
          location: "San Francisco, CA",
          employmentTypes: ["Senior level"],
          bgColor: "bg-pink-100",
          logo: "../../assets/AmazonLogo.jpg",
        },
        {
          id: 6,
          company: "Amazon",
          title: "Senior UI/UX Designer",
          datePosted: "20 May, 2024",
          salary: "$250 /hr",
          location: "San Francisco, CA",
          employmentTypes: ["Part time", "Senior level", "Distant", "Project Work"],
          bgColor: "bg-gray-200",
          logo: "../../assets/AmazonLogo.jpg",
        }
      ];
      const filteredJobs = jobs.filter((job) => {
        const searchTerm = search.toLowerCase();
        const matchesSearch =
          searchTerm === "" ||
          job.title.toLowerCase().includes(searchTerm) ||
          job.company.toLowerCase().includes(searchTerm) ||
          job.location.toLowerCase().includes(searchTerm);
    
        const matchesWorkingSchedule =
          workingSchedule.length === 0 ||
          workingSchedule.some((schedule) =>
            job.employmentTypes.includes(schedule)
          );
    
        const matchesEmploymentType =
          employmentType.length === 0 ||
          employmentType.some((type) => job.employmentTypes.includes(type));
    
        return matchesSearch && matchesWorkingSchedule && matchesEmploymentType;
      });

  return (
    <>
    <div className='text-black h-fit bg-white pb-20'>
        <header className='flex space-x-2 justify-between mx-4 text-white'>
            <button className='flex items-center bg-black p-3 rounded-xl'>
                <FaSearch className='mr-5'/> Designer
            </button>
            <button className='flex items-center bg-black p-3 rounded-xl'>
            <IoLocationSharp className='mr-5' />
            Work Location
            </button>
            <button className='flex items-center bg-black p-3 rounded-xl'>
            <PiBagFill className='mr-5' />
            Experience
            </button>
            <button className='flex items-center bg-black p-3 rounded-xl'>
            <MdCalendarMonth className='mr-5' />
            Per month
            </button>
            <p className='flex items-center text-black'>
                Salary range
            </p>
        </header>
        {/* Left Part */}
        <div className='flex h-fit items-center'>
            <div className='w-1/3'>
                {/* Image */}
                <div className='text-left ml-6'>
                    <p className='text-xl font-semibold'>Filters</p>
                    <div className='flex flex-col space-y-2 mt-4'>
                        <p className='text-gray-400'>Working Schedule</p>
                        <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Full time"
                    onChange={handleWorkingScheduleChange}
                  />
                  Full time
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Part time"
                    onChange={handleWorkingScheduleChange}
                  />
                  Part time
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Internship"
                    onChange={handleWorkingScheduleChange}
                  />
                  Internship
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Project Work"
                    onChange={handleWorkingScheduleChange}
                  />
                  Project Work
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Volunteering"
                    onChange={handleWorkingScheduleChange}
                  />
                  Volunteering
                </span>
                    </div>
                    <div className="flex flex-col space-y-2">
                <p className="text-gray-400 mt-4">Employment Type</p>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Full day"
                    onChange={handleEmploymentTypeChange}
                  />
                  Full day
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Flexible Schedule"
                    onChange={handleEmploymentTypeChange}
                  />
                  Flexible Schedule
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Shift work"
                    onChange={handleEmploymentTypeChange}
                  />
                  Shift work
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Distant Work"
                    onChange={handleEmploymentTypeChange}
                  />
                  Distant Work
                </span>
                <span>
                  <input
                    className="mr-2"
                    type="checkbox"
                    value="Shift method"
                    onChange={handleEmploymentTypeChange}
                  />
                  Shift method
                </span>
              </div>
            </div>
          </div>
            {/* Right Part */}
            <div className="mt-4 pb-10">
            <div className="flex justify-between">
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="bg-white border-2 border-black px-3 py-2 w-[120px] focus:border-none outline-none rounded-md shadow-md text-lg font-mono transition-[width] duration-300 focus:outline focus:outline-blue-500 focus:shadow-none focus:w-[230px] placeholder:text-blue-500"
                name="text"
                type="text"
              />

              <span className="flex">
                Sort by : Last Updated <IoFilterSharp className="mx-3" />
              </span>
            </div>

            <div className="grid grid-cols-3 gap-16 my-4 h-screen">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="w-64 h-fit rounded-xl bg-white text-black p-1 border-2 border-black"
                >
                  <div className={`${job.bgColor} m-2 rounded-lg h-fit`}>
                    <span className="flex justify-between items-center pt-2 mr-2">
                      <p className="bg-white w-24 text-xs p-2 rounded-full ml-4">
                        {job.datePosted}
                      </p>
                      <HiOutlineBookmark className="w-10 h-10 p-2 rounded-full bg-white" />
                    </span>
                    <p className="font-bold mt-5 text-left ml-3 text-xs">
                      {job.company}
                    </p>
                    <span>
                      <p className="text-lg font-semibold text-left ml-3 w-40">
                        {job.title}
                      </p>
                      <img src={job.logo} alt={`${job.company} logo`} />
                    </span>
                    <span className="flex flex-wrap mt-4 mb-2 pb-1 pl-2 text-center ">
                      {job.employmentTypes.map((type, index) => (
                        <p
                          key={index}
                          className="w-16 text-xs mr-2 flex items-center p-1 mb-2 rounded-full border-2 border-black "
                        >
                          {type}
                        </p>
                      ))}
                    </span>
                  </div>
                  <div className="flex justify-between my-3">
                    <span className="text-left ml-3">
                      <p className="font-bold">{job.salary}</p>
                      <p className="text-gray-500">{job.location}</p>
                    </span>
                    <button className="bg-black text-white rounded-full p-2">
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

export default OrgPageListing;