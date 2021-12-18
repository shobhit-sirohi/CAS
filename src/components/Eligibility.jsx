import React, { useState } from "react";

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
    <div className="h-4/5 bg-no-repeat bg-102% bg-eligible bg-newred flex flex-col md:flex-row px-4 lg:px-20 md:px-10  2xl:px-40  justify-center items-center md:items-end pb-4 pt-6 md:pb-20">
      <ul className="pb-12 space-y-6 text-2xl font-medium text-darkblue md:text-white md:w-1/3 2xl:text-4xl lg:text-2xl md:text-xl ">
        <li>
          <a
            onClick={handleEligibility}
            className="hover:text-darkblue hover:cursor-pointer"
          >
            Applicant Eligibility
          </a>
        </li>
        <li>
          <a
            onClick={handleApplication}
            className="hover:text-darkblue hover:cursor-pointer"
          >
            Application Process
          </a>
        </li>
        <li>
          <a
            onClick={handleDeadline}
            className="hover:text-darkblue hover:cursor-pointer"
          >
            Application Deadlines
          </a>
        </li>
        <li>
          <a
            onClick={handleFee}
            className="hover:text-darkblue hover:cursor-pointer"
          >
            Program Fee
          </a>
        </li>
      </ul>

      <div className="flex items-end justify-center h-full md:w-2/3">
        <div
          className={
            " bg-darkblue w-5/6 h-4/6 p-8 text-white space-y-4 " +
            eligibility
          }
        >
          <h2 className="text-xl font-bold 2xl:text-4xl lg:text-3xl md:text-2xl">
            Applicant Eligibility
          </h2>
          <p className="pt-1 font-medium 2xl:pt-4 lg:pt-2 2xl:text-2xl lg:text-base ">
            High-school students from across the world, who
            are driven by curiosity, ambition and a spark
            for innovation are welcome to apply.
          </p>
          <p className="font-medium 2xl:text-2xl lg:text-base">
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
          <h2 className="text-xl font-bold 2xl:text-4xl lg:text-3xl md:text-2xl">
            Application Process
          </h2>
          <p className="pt-1 font-medium 2xl:pt-4 lg:pt-2 2xl:text-2xl lg:text-base">
            Round 1: Application Form.
          </p>
          <p className="font-medium 2xl:text-2xl lg:text-base">
            Round 2: Interview
          </p>
          <p className="font-medium 2xl:text-2xl lg:text-base">
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
          <h2 className="text-xl font-bold 2xl:text-4xl lg:text-3xl md:text-2xl">
            Application Deadlines
          </h2>
          <p className="pt-1 text-sm font-medium 2xl:pt-4 lg:pt-2 2xl:text-2xl lg:text-base">
            Early application deadline: 10th January 2022 .
          </p>
          <p className="font-medium 2xl:text-2xl lg:text-base">
            Regular application deadline: 25th January 2022
          </p>
          <p className="font-medium 2xl:text-2xl lg:text-base">
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
          <h2 className="text-xl font-bold 2xl:text-4xl lg:text-3xl md:text-2xl">
            Program Fee
          </h2>
          <p className="pt-1 font-medium 2xl:pt-4 lg:pt-2 2xl:text-2xl lg:text-base">
            Early application fee: USD 600
          </p>
          <p className="font-medium 2xl:text-2xl lg:text-base">
            Regular application fee: USD 850
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
