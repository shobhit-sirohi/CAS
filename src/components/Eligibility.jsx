import React from "react";
import eligible from "../images/eligibility.svg";

const Eligibility = () => {
  return (
    <div
      className="h-4/5 bg-no-repeat bg-102% bg-newred flex px-40 justify-center items-end pb-20"
      style={{ backgroundImage: `url(${eligible})` }}
    >
      <ul className="space-y-6 w-1/3 text-4xl text-white font-medium pb-12">
        <li>
          <a href="#">Applicant Eligibility</a>
        </li>
        <li>
          <a href="#">Application Process</a>
        </li>
        <li>
          <a href="#">Application Deadlines</a>
        </li>
        <li>
          <a href="#">Program Fee</a>
        </li>
      </ul>

      <div className="w-2/3 h-full flex justify-center items-end">
        <div className="bg-darkblue w-5/6 h-4/6 p-8 text-white space-y-4">
          <h2 className="text-4xl font-bold">
            Applicant Eligibility
          </h2>
          <p className="text-2xl font-medium pt-4">
            High-school students from across the world, who
            are driven by curiosity, ambition and a spark
            for innovation are welcome to apply.
          </p>
          <p className="text-2xl font-medium">
            We don't consider graes or mark shets as
            yardsticks for eligibility - instead, we want to
            know about you, your ideas and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
