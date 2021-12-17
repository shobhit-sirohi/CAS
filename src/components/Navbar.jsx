import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between h-28 px-10 items-center md:sticky md:top-0 md:z-10 border-b-2 border-gray-600">
      <div>
        <img src={logo} alt="logo" className="h-20" />
      </div>
      <ul className="flex space-x-10 text-xl font-medium text-gray-600">
        <li>
          <a href="#">CSDGC YSICL</a>
        </li>
        <li>
          <a href="#">Summer Programs</a>
        </li>
        <li>
          <a href="#">Harvard</a>
        </li>
        <li>
          <a href="#">More Programs</a>
        </li>
        <li>
          <a href="#">Coffee with Leaders</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
