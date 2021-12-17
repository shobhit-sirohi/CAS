import React, { useState } from "react";
import eligible from "../images/eligibility.svg";

const Eligibility = () => {
  const [eligibility, setEligibility] = useState(" block ");
  const [application, setApplication] =
    useState(" hidden ");
  const [deadline, setDeadline] = useState(" hidden ");
  const [fee, setFee] = useState(" hidden ");

  const handleEligibility = () => {
    setEligibility(" block ");
    setApplication(" hidden ");
    setDeadline(" hidden ");
    setFee(" hidden ");
  };
  const handleApplication = () => {
    setEligibility(" hidden ");
    setApplication(" block ");
    setDeadline(" hidden ");
    setFee(" hidden ");
  };
  const handleDeadline = () => {
    setEligibility(" hidden ");
    setApplication(" hidden ");
    setDeadline(" block ");
    setFee(" hidden ");
  };
  const handleFee = () => {
    setEligibility(" hidden ");
    setApplication(" hidden ");
    setDeadline(" hidden ");
    setFee(" block ");
  };
  return (
    <div
      className="h-4/5 bg-no-repeat bg-102% bg-newred flex px-40 justify-center items-end pb-20"
      style={{ backgroundImage: `url(${eligible})` }}
    >
      <ul className="space-y-6 w-1/3 text-4xl text-white font-medium pb-12 ">
        <li>
          <a
            onClick={handleEligibility}
            href="#"
            className="hover:text-darkblue"
          >
            Applicant Eligibility
          </a>
        </li>
        <li>
          <a
            onClick={handleApplication}
            href="#"
            className="hover:text-darkblue"
          >
            Application Process
          </a>
        </li>
        <li>
          <a
            onClick={handleDeadline}
            href="#"
            className="hover:text-darkblue"
          >
            Application Deadlines
          </a>
        </li>
        <li>
          <a
            onClick={handleFee}
            href="#"
            className="hover:text-darkblue"
          >
            Program Fee
          </a>
        </li>
      </ul>

      <div className="w-2/3 h-full flex justify-center items-end">
        <div
          className={
            " bg-darkblue w-5/6 h-4/6 p-8 text-white space-y-4 " +
            eligibility
          }
        >
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
        <div
          className={
            " bg-darkblue w-5/6 h-4/6 p-8 text-white space-y-4 " +
            application
          }
        >
          <h2 className="text-4xl font-bold">
            Application Process
          </h2>
          <p className="text-2xl font-medium pt-4">
            Round 1: Application Form (linked in the ‘Apply
            Now’ button).
          </p>
          <p className="text-2xl font-medium">
            Round 2: Interview
          </p>
          <p className="text-2xl font-medium">
            Students will then be admitted to the course on
            the basis of the application and interview.
          </p>
        </div>
        <div
          className={
            " bg-darkblue w-5/6 h-4/6 p-8 text-white space-y-4 " +
            deadline
          }
        >
          <h2 className="text-4xl font-bold">
            Application Deadlines
          </h2>
          <p className="text-2xl font-medium pt-4">
            Early application deadline: 10th January 2022 .
          </p>
          <p className="text-2xl font-medium">
            Regular application deadline: 25th January 2022
          </p>
          <p className="text-2xl font-medium">
            All applications are considered on a rolling
            basis
          </p>
        </div>
        <div
          className={
            " bg-darkblue w-5/6 h-4/6 p-8 text-white space-y-4 " +
            fee
          }
        >
          <h2 className="text-4xl font-bold">
            Program Fee
          </h2>
          <p className="text-2xl font-medium pt-4">
            Early application fee: USD 600
          </p>
          <p className="text-2xl font-medium">
            Regular application fee: USD 850
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
