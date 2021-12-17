import React from "react";

const Week = ({ weekno, text, color, height, padding }) => {
  return (
    <div className="flex flex-col items-center text-xl font-medium ">
      <div
        className={`flex flex-col h-44 w-56 ${color} p-1 ${padding} justify-center text-center text-white font-medium text-2xl font-Montserrat space-y-4`}
      >
        <p>{weekno}</p>
        <p>{text}</p>
      </div>
      <div className={`w-0.5 bg-white ${height} `}></div>
    </div>
  );
};

export default Week;
