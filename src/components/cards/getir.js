import GetirImg from "../../images/getir1.jpg";
import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Getir() {
  return (
    <div className="sm:w-[440px]">
      <div className="overflow-hidden rounded bg-white dark:bg-[#373A43] text-slate-500 dark:text-slate-300 shadow-md shadow-slate-200 dark:shadow-slate-700">
        <div className="p-6">
          <header className="flex gap-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700 dark:text-slate-200">
                Getir Clone
              </h3>
              <p className="text-sm text-slate-400">20/10/2022</p>
            </div>
          </header>
        </div>
        <figure className="">
          <img
            src={GetirImg}
            alt=""
            className="bg-[#482b91] object-cover p-4 h-[440px] w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <p>A getir clone was created using React.js and Tailwind CSS.</p>
        </div>
        <div className="flex justify-end gap-2 p-2 pt-0">
          <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-md tracking-wide text-emerald-700 dark:text-emerald-400 transition duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-500 dark:hover:text-emerald-200 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <a
              href="https://github.com/ozcaneren/Getir-React-Duplicate"
              className="relative only:-mx-6"
            >
              <BsArrowReturnRight />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Getir;
