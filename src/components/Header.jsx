import React from "react";
import headerback from "../images/headerback.svg";
import harvard from "../images/harvard.png";
const Header = () => {
  return (
    <div
      className="bg-no-repeat bg-right-bottom-2 bg-cover bg-darkblue h-screen px-40 py-20 flex flex-col justify-between"
      style={{ backgroundImage: `url(${headerback})` }}
    >
      <span className="flex flex-col space-y-6">
        <p className="text-7xl font-medium text-white">
          GLOBAL
        </p>
        <span className="flex items-center text-white gap-4">
          <p className="text-11xl  font-bold tracking-wider">
            CAS
          </p>
          <span className="flex flex-col text-4xl font-medium">
            <p className="">CREATIVITY</p>
            <p className="">ACTIVITY</p>
            <p className="">SERVICE</p>
          </span>
        </span>
        <p className="text-4xl font-medium text-white">
          LEADERS PROGRAM
        </p>
        <a
          className="bg-newyellow text-darkblue text-4xl font-bold w-72 p-4 flex items-center justify-center hover:text-white hover:bg-newred"
          href="#"
          target="_blank"
        >
          APPLY NOW
        </a>
      </span>
      <div className="flex items-end">
        <div className="w-2/3 text-white text-3xl">
          <p>
            High-school students will recieve an
            unparalleled CAS (Creativity, Activity, Service)
            experience with top Harvard mentors from HArvard
            Student Agencies. Students will develop a
            "Passion Project",an investigating activity
            towards academic excellence and changemaking
          </p>
        </div>
        <div className="1/3 text-2xl flex flex-col font-medium pl-40 pt-10">
          <span className="space-y-1">
            <p className="">POWERED BY</p>
            <img
              src={harvard}
              alt="harvard student agencies"
            />
            <p className="text-newred pt-2 font-bold">
              PROGRAM STARTS:
            </p>
            <p>FEBRUARY 2022</p>
            <p className="text-darkblue pt-2 font-bold">
              DURATION:
            </p>
            <p>12 WEEKS</p>
            <p className="text-newyellow pt-2 font-bold">
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
