import React from "react";
import Area3back from "../images/PeopleRunning.png";
import Area3vector from "../images/Area3.svg";
const Area3 = () => {
  return (
    <div
      className="flex flex-col justify-end p-4 bg-cover lg:p-6 2xl:p-8 lg:px-20 2xl:px-40 h-4/5 "
      style={{ backgroundImage: `url(${Area3back})` }}
    >
      <div
        className="flex justify-center w-full p-10 text-base font-medium text-center text-black bg-white bg-right bg-no-repeat md:text-gray-500 md:text-lg lg:text-xl 2xl:text-2xl h-1/2 "
        style={{ backgroundImage: `url(${Area3vector})` }}
      >
        <p className="md:p-4 2xl:p-20">
          Rather than being a teacher-centered curriculum,
          the Global CAS Leaders Program follows a
          student-centered curriculum: Students identify an
          area of interest and they develop a burning
          question related to that topic.
        </p>
      </div>
    </div>
  );
};

export default Area3;
