import React from "react";
import { Link } from "react-router-dom";
const OrgNavbar = () => {
  return (
    <div className="relative z-10 py-4 md:py-6" x-data="{expanded: false}">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              to="/home"
              title=""
              className="flex rounded outline-none text-2xl font-bold focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              
              FREELANZA
            </Link>
          </div>

          <div className="flex md:hidden">
            <button type="button" className="text-gray-900">
              <span x-show="!expanded" aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>

              <span x-show="expanded" aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
            <Link
              to="/manageListings"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Manage Listings{" "}
            </Link>

            <Link
              to="/postjob"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Post Job{" "}
            </Link>

            <Link
              to="/orgProfile"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Profile{" "}
            </Link>
          </div>

          <div className="hidden md:flex">
            <Link
              to="/"
              title=""
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgNavbar;
