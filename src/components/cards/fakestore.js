import GetirImg from "../../images/fakestore.png";
import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Fakestore() {
  return (
    <div className="sm:w-[440px]">
      <div className="overflow-hidden rounded bg-white dark:bg-[#373A43] text-slate-500 dark:text-slate-300 shadow-md shadow-slate-200 dark:shadow-slate-700">
        <div className="p-6">
          <header className="flex gap-4">
            <div>
              <h3 className="text-xl font-medium text-slate-700 dark:text-slate-200">
                FakeStore API Project
              </h3>
              <p className="text-sm text-slate-400">25/05/2023</p>
            </div>
          </header>
        </div>
        <figure className="">
          <img
            src={GetirImg}
            alt=""
            className="bg-[#531746] p-4 h-[440px] w-full"
          />
        </figure>
        <div className="p-6">
          <p>
            I used the fake store API to get the data. I used the Redux Toolkit
            to manage the state.
          </p>
        </div>
        <div className="flex justify-end gap-2 p-2 pt-0">
          <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-md tracking-wide text-emerald-700 dark:text-emerald-400 transition duration-300 hover:bg-emerald-100 dark:hover:bg-emerald-500 dark:hover:text-emerald-200 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <a
              href="https://github.com/ozcaneren/Fake-Store-API"
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

export default Fakestore;
