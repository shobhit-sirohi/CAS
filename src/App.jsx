import React from "react";
import Area3 from "./components/Area3";
import Eligibility from "./components/Eligibility";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mentors from "./components/Mentors";
import Navbar from "./components/Navbar";
import Projectareas from "./components/Projectareas";
import Whyparticipate from "./components/Whyparticipate";

const App = () => {
  return (
    <div className="flex justify-center lg:h-screen lg:w-screen font-Montserrat">
      <div className="max-w-screen-3000">
        <Navbar />
        <Header />
        <Area3 />
        <Projectareas />
        <Whyparticipate />
        <Mentors />
        <Eligibility />
        <Footer />
      </div>
    </div>
  );
};

export default App;
