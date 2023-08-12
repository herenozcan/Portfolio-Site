import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divide from "../components/Divide";
import Bookmarkapp from "../components/cards/bookmarkapp";
import Todoapp from "../components/cards/todoapp";
import Chatapp from "../components/cards/chatapp";
import Nestapp from "../components/cards/nestapp";
import Getir from "../components/cards/getir";
import Lemon from "../components/cards/lemon";
import Darklight from "../components/cards/darklight";
import Fakestore from "../components/cards/fakestore";
import Css from "../components/cards/css";

function Projects() {
  return (
    <>
      <div className="bg-gray-200 dark:bg-[#202125]">
        <div className="container mx-auto">
          <Header />
          <div className="pt-5">
            <h1 className="text-4xl pt-4 font-bold text-center text-gray-800 dark:text-white">
              Projects
            </h1>
          </div>
          <div className="pt-5">
            <Divide />
          </div>
          <div className="">
            <div className="grid sm:grid-cols-3 justify-items-center px-4 sm:px-0 gap-y-8">
              <Bookmarkapp />
              <Todoapp />
              <Chatapp />
              <Nestapp />
              <Getir />
              <Lemon />
              <Darklight />
              <Fakestore />
              <Css />
            </div>
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

export default Projects;
