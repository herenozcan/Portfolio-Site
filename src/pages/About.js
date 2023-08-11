import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divide from "../components/Divide";

function About() {
  return (
    <>
      <div className="bg-gray-200 dark:bg-[#202125]">
        <div className="container mx-auto">
          <Header />
          <div className="pt-5">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
              About
            </h1>
          </div>
          <div className="pt-5">
            <Divide />
          </div>
          <div className="py-60">
            <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
              Coming Soon
            </h1>
          </div>
          <div className="pb-10">
            <Divide />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;