import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { PiBagFill } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { HiOutlineBookmark } from "react-icons/hi2";
function JobList() {
  return (
    <>
    <div className='text-black h-screen bg-white'>
        <header className='flex space-x-2 justify-between mx-4 text-white'>
            <button className='flex items-center'>
                <FaSearch className='mr-5'/> Designer
            </button>
            <button className='flex items-center'>
            <IoLocationSharp className='mr-5' />
            Work Location
            </button>
            <button className='flex items-center'>
            <PiBagFill className='mr-5' />
            Experience
            </button>
            <button className='flex items-center'>
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
                        <span><input className='mr-2' type="checkbox" name="" id="" />Full time</span>
                        <span><input className='mr-2' type="checkbox" name="" id="" />Part time</span>
                        <span><input className='mr-2' type="checkbox" name="" id="" />Internship</span>
                        <span><input className='mr-2' type="checkbox" name="" id="" />Project Work</span>
                        <span><input className='mr-2' type="checkbox" name="" id="" />Volunteering</span>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-gray-400 mt-4'>Employment Type</p>
                        <span><input className='mr-2' type="checkbox" name="" id="" />Full day</span>
                        <span><input className='mr-2' type="checkbox" name="" id="" />Flexible Schedule</span>
                        <span><input className='mr-2' type="checkbox" name="" id="" />Shift work</span>
                        <span><input className='mr-2' type="checkbox" name="" id="" />Distant Work</span>
                        <span><input className='mr-2' type="checkbox" name="" id="" />Shift method</span>
                    </div>
                </div>
            </div>
            {/* Right Part */}
            <div className='mt-4'>
                <div className='flex justify-between'>
                    <p>Recommended Jobs</p>
                    <span className='flex'>Sort by : Last Updated <IoFilterSharp className='mx-3'/></span>
                </div>
                <div className='grid grid-cols-3 gap-16 my-4 h-screen'>
                <div className='w-64 h-fit rounded-xl bg-white text-black p-1 border-2 border-black'>
                    <div className='bg-orange-200 m-2 rounded-lg h-fit'>
                        <span className='flex justify-between items-center pt-2 mr-2'>
                            <p className='bg-white w-24 text-xs p-2 rounded-full ml-4'>20 May, 2024</p>
                            <HiOutlineBookmark className='w-10 h-10 p-2 rounded-full bg-white'/>
                        </span>
                        <p className='font-bold mt-5 text-left ml-3 text-xs'>Amazon</p>
                        <span>
                            <p className='text-lg font-semibold text-left ml-3 w-40'>Senior UI/UX Designer</p>
                            <img className='' src="../../assets/AmazonLogo.jpg" alt="" />
                        </span>
                        <span className='flex flex-wrap mt-4 mb-2 pb-3'>
                            <p className='w-16 mr-2 ml-2 text-xs rounded-full border-2 border-black pt-2'>Part time</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black'>Senior level</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black pt-2'>Distant</p>
                            <p className='w-16 mr-2 ml-2 mt-2 text-xs rounded-full border-2 border-black'>Project Work</p>
                        </span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span className='text-left ml-3'>
                            <p className='font-bold'>$250 /hr</p>
                            <p className='text-gray-500'>San Francisco,CA</p>    
                        </span>
                        <button className='bg-black text-white rounded-full'>
                            Details    
                        </button>   
                    </div>
                </div>
                <div className='w-64 h-fit rounded-xl bg-white text-black p-1 border-2 border-black'>
                    <div className='bg-green-200 m-2 rounded-lg h-fit'>
                        <span className='flex justify-between items-center pt-2 mr-2'>
                            <p className='bg-white w-24 text-xs p-2 rounded-full ml-4'>20 May, 2024</p>
                            <HiOutlineBookmark className='w-10 h-10 p-2 rounded-full bg-white'/>
                        </span>
                        <p className='font-bold mt-5 text-left ml-3 text-xs'>Amazon</p>
                        <span>
                            <p className='text-lg font-semibold text-left ml-3 w-40'>Senior UI/UX Designer</p>
                            <img className='' src="../../assets/AmazonLogo.jpg" alt="" />
                        </span>
                        <span className='flex flex-wrap mt-4 mb-2 pb-3'>
                            <p className='w-16 mr-2 ml-2 text-xs rounded-full border-2 border-black pt-2'>Part time</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black'>Senior level</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black pt-2'>Distant</p>
                            <p className='w-16 mr-2 ml-2 mt-2 text-xs rounded-full border-2 border-black'>Project Work</p>
                        </span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span className='text-left ml-3'>
                            <p className='font-bold'>$250 /hr</p>
                            <p className='text-gray-500'>San Francisco,CA</p>    
                        </span>
                        <button className='bg-black text-white rounded-full'>
                            Details    
                        </button>   
                    </div>
                </div>
                <div className='w-64 h-fit rounded-xl bg-white text-black p-1 border-2 border-black'>
                    <div className='bg-purple-200 m-2 rounded-lg h-fit'>
                        <span className='flex justify-between items-center pt-2 mr-2'>
                            <p className='bg-white w-24 text-xs p-2 rounded-full ml-4'>20 May, 2024</p>
                            <HiOutlineBookmark className='w-10 h-10 p-2 rounded-full bg-white'/>
                        </span>
                        <p className='font-bold mt-5 text-left ml-3 text-xs'>Amazon</p>
                        <span>
                            <p className='text-lg font-semibold text-left ml-3 w-40'>Senior UI/UX Designer</p>
                            <img className='' src="../../assets/AmazonLogo.jpg" alt="" />
                        </span>
                        <span className='flex flex-wrap mt-4 mb-2 pb-3'>
                            <p className='w-16 mr-2 ml-2 text-xs rounded-full border-2 border-black pt-2'>Part time</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black'>Senior level</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black pt-2'>Distant</p>
                            <p className='w-16 mr-2 ml-2 mt-2 text-xs rounded-full border-2 border-black'>Project Work</p>
                        </span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span className='text-left ml-3'>
                            <p className='font-bold'>$250 /hr</p>
                            <p className='text-gray-500'>San Francisco,CA</p>    
                        </span>
                        <button className='bg-black text-white rounded-full'>
                            Details    
                        </button>   
                    </div>
                </div>
                <div className='w-64 h-fit rounded-xl bg-white text-black p-1 border-2 border-black'>
                    <div className='bg-blue-100 m-2 rounded-lg h-fit'>
                        <span className='flex justify-between items-center pt-2 mr-2'>
                            <p className='bg-white w-24 text-xs p-2 rounded-full ml-4'>20 May, 2024</p>
                            <HiOutlineBookmark className='w-10 h-10 p-2 rounded-full bg-white'/>
                        </span>
                        <p className='font-bold mt-5 text-left ml-3 text-xs'>Amazon</p>
                        <span>
                            <p className='text-lg font-semibold text-left ml-3 w-40'>Senior UI/UX Designer</p>
                            <img className='' src="../../assets/AmazonLogo.jpg" alt="" />
                        </span>
                        <span className='flex flex-wrap mt-4 mb-2 pb-3'>
                            <p className='w-16 mr-2 ml-2 text-xs rounded-full border-2 border-black pt-2'>Part time</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black'>Senior level</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black pt-2'>Distant</p>
                            <p className='w-16 mr-2 ml-2 mt-2 text-xs rounded-full border-2 border-black'>Project Work</p>
                        </span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span className='text-left ml-3'>
                            <p className='font-bold'>$250 /hr</p>
                            <p className='text-gray-500'>San Francisco,CA</p>    
                        </span>
                        <button className='bg-black text-white rounded-full'>
                            Details    
                        </button>   
                    </div>
                </div>
                <div className='w-64 h-fit rounded-xl bg-white text-black p-1 border-2 border-black'>
                    <div className='bg-pink-100 m-2 rounded-lg h-fit'>
                        <span className='flex justify-between items-center pt-2 mr-2'>
                            <p className='bg-white w-24 text-xs p-2 rounded-full ml-4'>20 May, 2024</p>
                            <HiOutlineBookmark className='w-10 h-10 p-2 rounded-full bg-white'/>
                        </span>
                        <p className='font-bold mt-5 text-left ml-3 text-xs'>Amazon</p>
                        <span>
                            <p className='text-lg font-semibold text-left ml-3 w-40'>Senior UI/UX Designer</p>
                            <img className='' src="../../assets/AmazonLogo.jpg" alt="" />
                        </span>
                        <span className='flex flex-wrap mt-4 mb-2 pb-3'>
                            <p className='w-16 mr-2 ml-2 text-xs rounded-full border-2 border-black pt-2'>Part time</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black'>Senior level</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black pt-2'>Distant</p>
                            <p className='w-16 mr-2 ml-2 mt-2 text-xs rounded-full border-2 border-black'>Project Work</p>
                        </span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span className='text-left ml-3'>
                            <p className='font-bold'>$250 /hr</p>
                            <p className='text-gray-500'>San Francisco,CA</p>    
                        </span>
                        <button className='bg-black text-white rounded-full'>
                            Details    
                        </button>   
                    </div>
                </div>
                <div className='w-64 h-fit rounded-xl bg-white text-black p-1 border-2 border-black'>
                    <div className='bg-gray-200 m-2 rounded-lg h-fit'>
                        <span className='flex justify-between items-center pt-2 mr-2'>
                            <p className='bg-white w-24 text-xs p-2 rounded-full ml-4'>20 May, 2024</p>
                            <HiOutlineBookmark className='w-10 h-10 p-2 rounded-full bg-white'/>
                        </span>
                        <p className='font-bold mt-5 text-left ml-3 text-xs'>Amazon</p>
                        <span>
                            <p className='text-lg font-semibold text-left ml-3 w-40'>Senior UI/UX Designer</p>
                            <img className='' src="../../assets/AmazonLogo.jpg" alt="" />
                        </span>
                        <span className='flex flex-wrap mt-4 mb-2 pb-3'>
                            <p className='w-16 mr-2 ml-2 text-xs rounded-full border-2 border-black pt-2'>Part time</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black'>Senior level</p>
                            <p className='w-16 mr-2 text-xs rounded-full border-2 border-black pt-2'>Distant</p>
                            <p className='w-16 mr-2 ml-2 mt-2 text-xs rounded-full border-2 border-black'>Project Work</p>
                        </span>
                    </div>
                    <div className='flex justify-between my-3'>
                        <span className='text-left ml-3'>
                            <p className='font-bold'>$250 /hr</p>
                            <p className='text-gray-500'>San Francisco,CA</p>    
                        </span>
                        <button className='bg-black text-white rounded-full'>
                            Details    
                        </button>   
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default JobList