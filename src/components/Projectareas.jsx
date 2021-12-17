import React from "react";
import projectareaback from "../images/projectareaback.svg";
import pa1 from "../images/pa1.svg";
import pa2 from "../images/pa2.svg";
import pa3 from "../images/pa3.svg";
import pa4 from "../images/pa4.svg";
import pa5 from "../images/pa5.png";
const Projectareas = () => {
  return (
    <div
      className="h-screen bg-contain mt-32 px-40 bg-no-repeat bg-right-bottom  "
      style={{ backgroundImage: `url(${projectareaback})` }}
    >
      <h2 className="text-5xl font-bold pb-20">
        Project Areas
      </h2>
      <div className="flex gap-10 ">
        <div className="w-1/2 h-1/2 grid grid-cols-2 grid-rows-2 gap-4 text-2xl font-medium text-white">
          <a
            className="bg-newred  bg-right-top-4 bg-no-repeat h-80 w-80 bg-70% flex flex-col text-4xl font-medium justify-end p-10"
            href="#"
            style={{ backgroundImage: `url(${pa1})` }}
          >
            STEM
          </a>
          <a
            className="bg-right-top bg-no-repeat bg-newyellow h-80 w-80 bg-60% flex flex-col text-4xl font-medium justify-end p-6"
            href="#"
            style={{ backgroundImage: `url(${pa2})` }}
          >
            Community <br /> Services
          </a>
          <a
            className="bg-right-top bg-no-repeat bg-darkblue h-80 w-80 bg-50% flex flex-col text-4xl font-medium justify-end p-6"
            href="#"
            style={{ backgroundImage: `url(${pa3})` }}
          >
            Arts
          </a>
          <a
            className="bg-right-top bg-no-repeat bg-darkindigo h-80 w-80 bg-50% flex flex-col text-4xl font-medium justify-end p-6"
            href="#"
            style={{ backgroundImage: `url(${pa4})` }}
          >
            Business
          </a>
        </div>
        <div className="w-1/2">
          <div
            className="h-full bg-newred rounded-bl-2xl bg-no-repeat bg-right-bottom-3 bg-40% text-white text-3xl font-medium space-y-4 "
            style={{ backgroundImage: `url(${pa1})` }}
          >
            <img
              className="h-3/5 object-cover "
              src={pa5}
              alt="kids with a computer"
            />
            <h2 className="pl-6">
              How to make a social impact through technology
            </h2>
            <p className="pl-6">
              Code a website
              <br />
              Build a mobile application
              <br />
              Build a robot
            </p>
          </div>
          <h2 className=" text-3xl pl-20 pt-6 text-white font-medium ">
            Students will be grouped in
            <br />
            teams of 3-5 with peers from
            <br /> across the world.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Projectareas;
