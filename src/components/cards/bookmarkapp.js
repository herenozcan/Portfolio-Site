import React from "react";
import Bookmark from "../../images/bookmark1.png";
import { BsArrowReturnRight } from "react-icons/bs";

function bookmarkapp() {
  return (
    <div className="sm:w-[440px]">
      <div className="overflow-hidden rounded bg-white dark:bg-[#373A43] text-slate-500 dark:text-slate-300 shadow-md shadow-slate-200 dark:shadow-slate-700">
        <div className="p-6">
          <header className="flex gap-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700 dark:text-slate-200">
                Bookmark App
              </h3>
              <p className="text-sm text-slate-400"> Date </p>
            </div>
          </header>
        </div>
        <figure className="">
          <img
            src={Bookmark}
            alt=""
            className="bg-[#ed6c3a] h-[440px] p-4 object-cover w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <p>
            A simple bookmark app that allows you to save your favorite.
          </p>
        </div>
        <div className="flex justify-end gap-2 p-2 pt-0">
          <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-md tracking-wide text-emerald-700 dark:text-emerald-400 transition duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-500 dark:hover:text-emerald-200 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span className="relative only:-mx-6">
              <BsArrowReturnRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default bookmarkapp;
