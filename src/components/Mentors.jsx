import React from "react";
import mentors from "../images/mentors.svg";
const Mentors = () => {
  return (
    <div
      className=" bg-no-repeat bg-center bg-70%  px-4 py-4 md:px-10 md:py-10 md:pt-10 pt-6 2xl:px-40  2xl:pt-24  flex flex-col justify-center text-center"
      style={{ backgroundImage: `url(${mentors})` }}
    >
      <h2 className="pb-6 text-2xl font-bold md:pb-10 lg:pb-16 2xl:pb-20 2xl:text-5xl lg:text-4xl md:text-3xl text-darkblue font-Montserrat">
        Meet Our Mentors
      </h2>
      <div className="grid grid-cols-1 space-y-10 2xl:gap-20 lg:gap-16 md:grid-cols-3 md:space-y-0 ">
        <div className="flex flex-col items-center justify-center">
          <img className="bg-black w-80 h-72 " />
          <h2 className="pt-10 text-2xl font-medium">
            NAME COMES HERE
          </h2>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam veritatis natus nihil
            labore repudiandae debitis qui nobis officiis
            omnis facere commodi asperiores vitae autem
            doloremque, amet, animi.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="bg-black w-80 h-72 " />
          <h2 className="pt-10 text-2xl font-medium">
            NAME COMES HERE
          </h2>
          <p className="pt-4 ">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam veritatis natus nihil
            labore repudiandae debitis qui nobis officiis
            omnis facere commodi asperiores vitae autem
            doloremque, amet, animi.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="bg-black w-80 h-72 " />
          <h2 className="pt-10 text-2xl font-medium">
            NAME COMES HERE
          </h2>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam veritatis natus nihil
            labore repudiandae debitis qui nobis officiis
            omnis facere commodi asperiores vitae autem
            doloremque, amet, animi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
