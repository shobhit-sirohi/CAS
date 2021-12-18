import React from "react";

import harvard from "../images/harvard.png";
const Header = () => {
  return (
    <div className="flex flex-col px-4 py-4 space-y-4 bg-no-repeat bg-cover bg-none md:bg-hero lg:h-screen md:space-y-0 md:justify-between bg-darkblue lg:py-8 2xl:py-20 bg-right-bottom-2 2xl:px-40">
      <span className="flex flex-col space-y-0.5 2xl:space-y-6 lg:pl-6">
        <p className="text-2xl font-medium text-white lg:text-5xl md:text-3xl 2xl:text-7xl">
          GLOBAL
        </p>
        <span className="flex items-center gap-1 text-white lg:gap-3 md:gap-2 2xl:gap-4">
          <p className="font-bold text-7xl 2xl:text-11xl lg:text-8xl md:text-8xl">
            CAS
          </p>
          <span className="flex flex-col text-xl font-medium 2xl:text-4xl lg:text-3xl md:text-2xl">
            <p className="">CREATIVITY</p>
            <p className="">ACTIVITY</p>
            <p className="">SERVICE</p>
          </span>
        </span>
        <p className="text-xl font-medium text-white 2xl:text-4xl lg:text-3xl md:text-2xl">
          LEADERS PROGRAM
        </p>
        <a
          className="flex items-center justify-center w-40 p-1 text-xl font-bold 2xl:p-4 lg:p-3 md:p-2 2xl:text-4xl lg:text-3xl md:text-2xl bg-newyellow text-darkblue hover:text-white hover:bg-newred 2xl:w-72 lg:w-56 md:w-52 "
          href="#"
          target="_blank"
        >
          APPLY NOW
        </a>
      </span>
      <div className="flex flex-col lg:items-end lg:flex-row">
        <div className="p-6 text-lg text-newred lg:w-2/3 lg:text-white 2xl:text-3xl lg:text-xl md:text-xl">
          <p>
            High-school students will recieve an
            unparalleled CAS (Creativity, Activity, Service)
            experience with top Harvard mentors from HArvard
            Student Agencies. Students will develop a
            "Passion Project",an investigating activity
            towards academic excellence and changemaking
          </p>
        </div>
        <div className="flex flex-col p-6 pt-10 space-x-4 space-y-4 text-sm font-medium xl:pl-20 md:space-y-0 md:space-x-0 md:w-1/3 2xl:pl-40 2xl:text-2xl lg:text-xl md:text-base">
          <span className="">
            <p className="">POWERED BY</p>
            <img
              className="w-40 h-16 md:w-auto"
              src={harvard}
              alt="harvard student agencies"
            />
          </span>
          <span>
            <p className="font-bold md:pt-2 lg:text-newred text-darkblue">
              PROGRAM STARTS:
            </p>
            <p>FEBRUARY 2022</p>
          </span>
          <span>
            <p className="font-bold md:pt-2 text-darkblue">
              DURATION:
            </p>
            <p>12 WEEKS</p>
            <p className="font-bold md:pt-2 text-newyellow">
              ELIGIBILITY:
            </p>
            <p>GRADES 9TH - 12TH</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
