import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-4 bg-white border-gray-600 lg:h-18 2xl:h-28 lg:px-10 md:sticky md:top-0 md:z-10 lg:border-b-2">
      <div>
        <img
          src={logo}
          alt="logo"
          className="h-10 lg:h-12 2xl:h-20"
        />
      </div>
      <a className="lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu-2"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </a>
      <ul className="justify-center hidden text-sm font-medium text-gray-600 lg:space-x-4 2xl:space-x-6 lg:text-base 2xl:text-xl lg:flex lg:items-center">
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
