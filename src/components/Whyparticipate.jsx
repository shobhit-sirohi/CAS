import React from "react";
import parti from "../images/parti.svg";
import why1 from "../images/why1.png";
import why2 from "../images/why2.png";
import why3 from "../images/why3.png";
import Week from "./Week";
const Whyparticipate = () => {
  return (
    <div
      className="bg-darkblue bg-no-repeat bg-right-top bg-60%  px-40  pt-32"
      style={{ backgroundImage: `url(${parti})` }}
    >
      <h2 className="text-white text-5xl font-bold font-Montserrat ">
        Why should <br /> you participate?
      </h2>
      <div className="grid grid-cols-2 pt-40 items-center justify-items-center gap-14 ">
        <span className="">
          <h3 className="text-darkyellow text-4xl  font-medium">
            Build a Strong <br /> College resume
          </h3>
          <p className="text-white text-3xl pt-10   font-medium">
            Have a passion project for your college, resume
            and build experiences that take you closer to
            your goals.
          </p>
        </span>
        <img
          src={why1}
          alt="resume image"
          className=" h-96 w-96"
        />
        <img
          src={why2}
          alt="resume image"
          className=" h-96 w-96"
        />
        <span className="">
          <h3 className="text-darkyellow text-4xl  font-medium">
            Get mentored by <br /> Harvard mentors from{" "}
            <br /> Harvard Student Agencies
          </h3>
          <p className="text-white text-3xl pt-10   font-medium">
            The final proejcts will also be judged by
            Harvard students.
          </p>
        </span>
        <span className="">
          <h3 className="text-darkyellow text-4xl  font-medium">
            Collaborate with
            <br />
            Global Peers
          </h3>
          <p className="text-white text-3xl pt-10   font-medium">
            Find your passion. Collaborate with like-minded
            individuals from across the world to broaden
            your perspectives and network like never before.
          </p>
        </span>
        <img
          src={why3}
          alt="resume image"
          className=" h-auto"
        />
      </div>
      <h2 className="text-white text-5xl font-bold font-Montserrat pt-40 ">
        Program
        <br />
        Schedule
      </h2>

      <div className="pt-40 flex h-1/3 gap-8 overflow-x-scroll overscroll-auto ">
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
