import React, { useState } from "react";
import projectareaback from "../images/projectareaback.svg";
import pa1 from "../images/pa1.svg";
import pa2 from "../images/pa2.svg";
import pa3 from "../images/pa3.svg";
import pa4 from "../images/pa4.svg";

import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
const Projectareas = () => {
  const [one, setOne] = useState("block");
  const [two, setTwo] = useState("hidden");
  const [three, setThree] = useState("hidden");
  const [four, setFour] = useState("hidden");

  const handleOne = () => {
    setOne("block");
    setTwo("hidden");
    setThree("hidden");
    setFour("hidden");
  };
  const handleTwo = () => {
    setOne("hidden");
    setTwo("block");
    setThree("hidden");
    setFour("hidden");
  };
  const handleThree = () => {
    setOne("hidden");
    setTwo("hidden");
    setThree("block");
    setFour("hidden");
  };
  const handleFour = () => {
    setOne("hidden");
    setTwo("hidden");
    setThree("hidden");
    setFour("block");
  };

  return (
    <div
      className="h-auto px-4 bg-right-bottom bg-no-repeat bg-contain lg:mt-32 lg:px-20 2xl:px-40 "
      style={{ backgroundImage: `url(${projectareaback})` }}
    >
      <h2 className="pt-4 text-3xl font-bold lg:pb-20 lg:text-4xl 2xl:text-5xl">
        Project Areas
      </h2>
      <div className="flex flex-col items-center gap-2 pt-4 md:gap-10 md:flex-row">
        <div className="grid grid-cols-2 gap-4 font-medium text-white md:w-1/2 lg:text-xl 2xl:text-2xl md:h-1/2">
          <a
            onClick={handleOne}
            className="bg-newred  bg-right-top-4 bg-no-repeat h-40 hover:cursor-pointer w-40 md:h-40 md:w-40 lg:h-52 lg:w-52 2xl:h-80 2xl:w-80 bg-70% flex flex-col lg:text-xl 2xl:text-4xl font-medium justify-end p-10"
            style={{ backgroundImage: `url(${pa1})` }}
          >
            STEM
          </a>
          <a
            onClick={handleTwo}
            className="bg-right-top bg-no-repeat bg-newyellow hover:cursor-pointer  md:h-40 h-40 w-40 md:w-40 lg:h-52 lg:w-52 2xl:h-80 2xl:w-80 bg-60% flex flex-col lg:text-xl 2xl:text-4xl font-medium justify-end p-6"
            style={{ backgroundImage: `url(${pa2})` }}
          >
            Community <br /> Services
          </a>
          <a
            onClick={handleThree}
            className="bg-right-top bg-no-repeat bg-darkblue hover:cursor-pointer md:h-40 h-40 w-40 md:w-40 lg:h-52 lg:w-52 2xl:h-80 2xl:w-80 bg-50% flex flex-col lg:text-xl 2xl:text-4xl font-medium justify-end p-6"
            style={{ backgroundImage: `url(${pa3})` }}
          >
            Arts
          </a>
          <a
            onClick={handleFour}
            className="bg-right-top bg-no-repeat bg-darkindigo hover:cursor-pointer h-40 w-40 md:h-40 md:w-40 lg:h-52 lg:w-52 2xl:h-80 2xl:w-80 bg-50% flex flex-col lg:text-xl 2xl:text-4xl font-medium justify-end p-6"
            style={{ backgroundImage: `url(${pa4})` }}
          >
            Business
          </a>
        </div>
        <div className="pt-4 md:w-1/2 md:pt-0 ">
          <div
            style={{ backgroundImage: `url(${pa1})` }}
            className={
              " h-auto bg-newred rounded-bl-2xl bg-no-repeat bg-right-bottom-3 bg-30% text-white lg:text-xl 2xl:text-3xl font-medium space-y-4  " +
              one
            }
          >
            <img
              className="object-cover w-full h-1/3 "
              src={pic1}
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
          <div
            style={{ backgroundImage: `url(${pa2})` }}
            className={
              " h-auto bg-newyellow rounded-bl-2xl bg-no-repeat bg-right-bottom-3 bg-30% text-white lg:text-xl 2xl:text-3xl font-medium space-y-4  " +
              two
            }
          >
            <img
              className="object-cover w-full h-1/3 "
              src={pic2}
              alt="kids with a computer"
            />
            <h2 className="pl-6">Community Services</h2>
            <p className="pl-6">
              Build an initiative to empower the homeless in
              India
              <br />
              Teach low-income students English
              <br />
              Help hospitals raise fund for Covid-19
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${pa3})` }}
            className={
              " h-auto bg-darkblue rounded-bl-2xl bg-no-repeat bg-right-bottom-3 bg-30% text-white lg:text-xl 2xl:text-3xl font-medium space-y-4  " +
              three
            }
          >
            <img
              className="object-cover w-full h-1/3 "
              src={pic3}
              alt="kids with a computer"
            />
            <h2 className="pl-6">Arts</h2>
            <p className="pl-6">
              Start a blog
              <br />
              Write a book
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${pa4})` }}
            className={
              " h-auto bg-darkindigo rounded-bl-2xl bg-no-repeat bg-right-bottom-3 bg-30% text-white lg:text-xl 2xl:text-3xl font-medium space-y-4  " +
              four
            }
          >
            <img
              className="object-cover w-full h-1/3 "
              src={pic4}
              alt="kids with a computer"
            />
            <h2 className="pl-6">
              How to make a social impact scs through
              technology
            </h2>
            <p className="pl-6">
              Code a website
              <br />
              Build a mobile application
              <br />
              Build a robot
            </p>
          </div>
          <h2 className="pt-6 pl-20 font-medium text-white lg:text-xl 2xl:text-3xl ">
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
