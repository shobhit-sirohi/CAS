import React from "react";
import mentors from "../images/mentors.svg";
const Mentors = () => {
  return (
    <div
      className=" bg-no-repeat bg-center bg-70%  px-40 pt-24 h-screen flex flex-col justify-center text-center"
      style={{ backgroundImage: `url(${mentors})` }}
    >
      <h2 className="text-darkblue text-5xl font-bold font-Montserrat">
        Meet Our Mentors
      </h2>
      <div className="grid grid-cols-3 gap-20 h-full  ">
        <span className="flex flex-col  justify-center items-center">
          <div className="bg-black h-2/5 w-5/6"></div>
          <h2 className="font-medium text-2xl pt-10">
            NAME COMES HERE
          </h2>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam veritatis natus nihil
            labore repudiandae debitis qui nobis officiis
            omnis facere commodi asperiores vitae autem
            doloremque, amet, animi, earum dolor quos
            ducimus aut. Maiores quas sunt eius minima at ad
            deserunt natus, molestias et suscipit quaerat!
            Aliquam cum quibusdam quod, molestias molestiae
            totam fugit blanditiis illo quas laboriosam
            culpa sequi ipsa, ut sed, magni voluptates.
          </p>
        </span>
        <span className="flex flex-col  justify-center items-center">
          <div className="bg-black  h-2/5 w-5/6 "></div>
          <h2 className="font-medium text-2xl pt-10">
            NAME COMES HERE
          </h2>
          <p className=" pt-4">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam veritatis natus nihil
            labore repudiandae debitis qui nobis officiis
            omnis facere commodi asperiores vitae autem
            doloremque, amet, animi, earum dolor quos
            ducimus aut. Maiores quas sunt eius minima at ad
            deserunt natus, molestias et suscipit quaerat!
            Aliquam cum quibusdam quod, molestias molestiae
            totam fugit blanditiis illo quas laboriosam
            culpa sequi ipsa, ut sed, magni voluptates.
          </p>
        </span>
        <span className="flex flex-col justify-center items-center">
          <div className="bg-black  h-2/5 w-5/6"></div>
          <h2 className="font-medium text-2xl pt-10">
            NAME COMES HERE
          </h2>
          <p className="pt-4">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam veritatis natus nihil
            labore repudiandae debitis qui nobis officiis
            omnis facere commodi asperiores vitae autem
            doloremque, amet, animi, earum dolor quos
            ducimus aut. Maiores quas sunt eius minima at ad
            deserunt natus, molestias et suscipit quaerat!
            Aliquam cum quibusdam quod, molestias molestiae
            totam fugit blanditiis illo quas laboriosam
            culpa sequi ipsa, ut sed, magni voluptates.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Mentors;
