import React from "react";
import footer from "../images/footer.png";
const Footer = () => {
  return (
    <div
      className=" h-2/3 bg-cover flex px-40 justify-left  items-end pb-6"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <span className="flex flex-col space-y-2">
        <p className="text-6xl font-medium text-darkblue">
          GLOBAL
        </p>
        <span className="flex items-center text-newred gap-4">
          <p className="text-10xl  font-bold">CAS</p>
          <span className="flex flex-col text-3xl font-medium">
            <p className="">CREATIVITY</p>
            <p className="">ACTIVITY</p>
            <p className="">SERVICE</p>
          </span>
        </span>
        <p className="text-3xl font-medium">
          LEADERS PROGRAM
        </p>
        <a
          className="bg-newyellow text-darkblue text-4xl font-bold w-72 p-4 flex items-center justify-center hover:text-white hover:bg-darkblue"
          href="#"
          target="_blank"
        >
          APPLY NOW
        </a>
      </span>
    </div>
  );
};

export default Footer;
