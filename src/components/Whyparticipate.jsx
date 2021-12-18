import React from "react";
import parti from "../images/parti.svg";
import why1 from "../images/why1.png";
import why2 from "../images/why2.png";
import why3 from "../images/why3.png";
import Week from "./Week";
const Whyparticipate = () => {
  return (
    <div
      className="bg-darkblue bg-no-repeat bg-right-top bg-60%  2xl:px-40 lg:px-20 px-4 xl:pt-32 lg:pt-20 pt-4"
      style={{ backgroundImage: `url(${parti})` }}
    >
      <h2 className="text-2xl font-bold text-white 2xl:text-5xl lg:test-4xl md:text-3xl font-Montserrat ">
        Why should <br /> you participate?
      </h2>
      <div className="grid items-center grid-cols-1 grid-rows-6 gap-6 pt-20 md:grid-rows-2 xl:pt-40 md:grid-cols-2 justify-items-center 2xl:gap-14 lg:gap-10 md:gap-8">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-medium lg:text-3xl 2xl:text-4xl text-darkyellow">
            Build a Strong <br /> College resume
          </h3>
          <p className="pt-10 text-2xl font-medium text-white lg:text-3xl 2xl:text-4xl ">
            Have a passion project for your college, resume
            and build experiences that take you closer to
            your goals.
          </p>
        </div>
        <div className="order-1 md:order-1">
          <img
            src={why1}
            alt="resume image"
            className="order-2 md:order-1 w-72 h-72 2xl:h-96 2xl:w-96"
          />
        </div>
        <div className="order-3">
          <img
            src={why2}
            alt="resume image"
            className=" w-72 h-72 2xl:h-96 2xl:w-96"
          />
        </div>
        <div className="order-4">
          <h3 className="text-2xl font-medium lg:text-3xl 2xl:text-4xl text-darkyellow">
            Get mentored by <br /> Harvard mentors from{" "}
            <br /> Harvard Student Agencies
          </h3>
          <p className="pt-10 text-2xl font-medium text-white lg:text-3xl 2xl:text-4xl">
            The final proejcts will also be judged by
            Harvard students.
          </p>
        </div>
        <div className="order-6 md:order-5">
          <h3 className="text-2xl font-medium lg:text-3xl 2xl:text-4xl text-darkyellow">
            Collaborate with
            <br />
            Global Peers
          </h3>
          <p className="pt-10 text-2xl font-medium text-white lg:text-3xl 2xl:text-4xl">
            Find your passion. Collaborate with like-minded
            individuals from across the world to broaden
            your perspectives and network like never before.
          </p>
        </div>
        <div className="order-5 md:order-6">
          <img
            src={why3}
            alt="resume image"
            className=" w-72 h-72 2xl:h-96 2xl:w-96"
          />
        </div>
      </div>
      <h2 className="pt-40 text-5xl font-bold text-white font-Montserrat ">
        Program
        <br />
        Schedule
      </h2>

      <div className="flex gap-8 pt-40 overflow-x-scroll h-1/3 overscroll-auto ">
        <Week
          color="bg-newred"
          height="h-32"
          weekno="WEEK 1"
          text="Introduction of the project an ideation."
        />
        <Week
          padding="mt-8"
          color="bg-darkyellow"
          height="h-24"
          weekno="WEEK 2"
          text="Creating action plans."
        />
        <Week
          color="bg-darkindigo"
          height="h-32"
          weekno="WEEK 3"
          text="How to execute and team plan."
        />
        <Week
          padding="mt-8"
          color="bg-newblue"
          height="h-24"
          weekno="WEEK 4"
          text="Gathering sources."
        />
        <Week
          color="bg-darkyellow"
          height="h-32"
          weekno="WEEK 5-7"
          text="Development and action."
        />
        <Week
          padding="mt-8"
          color="bg-newred"
          height="h-24"
          weekno="WEEK 8-10"
          text="Testing and execution."
        />
        <Week
          color="bg-newblue"
          height="h-32"
          weekno="WEEK 11"
          text="Gathering the presentation / report."
        />
        <Week
          padding="mt-8"
          color="bg-darkindigo"
          height="h-24"
          weekno="WEEK 12"
          text="Presentation + Judging."
        />
      </div>
    </div>
  );
};

export default Whyparticipate;
