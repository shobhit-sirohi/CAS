import React from "react";
import Area3back from "../images/PeopleRunning.png";
import Area3vector from "../images/Area3.svg";
const Area3 = () => {
  return (
    <div
      className="bg-cover h-4/5 flex flex-col p-8 px-40 justify-end "
      style={{ backgroundImage: `url(${Area3back})` }}
    >
      <div
        className="bg-right bg-no-repeat font-medium
         text-4xl text-gray-500 bg-white h-1/2  w-full flex  text-center p-10 justify-center "
        style={{ backgroundImage: `url(${Area3vector})` }}
      >
        <p>
          Rather than being a teacher-centered curriculum,
          <br />
          the Global CAS Leaders Program follows a<br />
          student-centered curriculum: Students identify an
          area of <br />
          interest and they develop a burning
          <br />
          question related to that topic.
        </p>
      </div>
    </div>
  );
};

export default Area3;
