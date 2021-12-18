import React from "react";
import footer from "../images/footer.png";
const Footer = () => {
  return (
    <div
      className="flex items-end px-4 pb-1 bg-no-repeat bg-auto 2xl:pb-6 lg:bg-cover h-2/3 lg:px-2 2xl:px-40 justify-left"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <span className="flex flex-col space-y-0.5 xl:space-y-6">
        <p className="text-2xl font-medium text-darkblue lg:text-5xl md:text-3xl 2xl:text-6xl">
          GLOBAL
        </p>
        <span className="flex items-center gap-1 text-newred lg:gap-3 md:gap-2 2xl:gap-4">
          <p className="font-bold text-7xl 2xl:text-11xl lg:text-8xl md:text-8xl">
            CAS
          </p>
          <span className="flex flex-col text-xl font-medium 2xl:text-4xl lg:text-3xl md:text-2xl">
            <p className="">CREATIVITY</p>
            <p className="">ACTIVITY</p>
            <p className="">SERVICE</p>
          </span>
        </span>
        <p className="text-xl font-medium text-darkblue 2xl:text-4xl lg:text-3xl md:text-2xl">
          LEADERS PROGRAM
        </p>
        <a
          className="flex items-center justify-center w-40 p-1 text-xl font-bold 2xl:p-4 lg:p-3 md:p-2 2xl:text-4xl lg:text-3xl md:text-2xl bg-newyellow text-darkblue hover:text-white hover:bg-newred 2xl:w-72 lg:w-56 md:w-52 "
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
