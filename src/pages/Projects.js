import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divide from "../components/Divide";
import { useTranslation } from "react-i18next";
import Bookmark from "../images/bookmark1.png";
import { BiRightArrowAlt } from "react-icons/bi";
import Chatapp from "../images/chatapp.jpg";
import Todo from "../images/to-do-list-apps.png";

function Projects() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-gray-200 dark:bg-[#202125]">
        <div className="container mx-auto">
          <Header />
          <div className="mt-8">
            <h1 className="text-center">
              <span className="text-4xl font-bold text-gray-800 dark:text-white">
                {t("Projects")}
              </span>
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-16 text-center pt-9 pb-9">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img
                    className="rounded-t-lg object-fill bg-[#6EA1B0]"
                    src={Bookmark}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {t("Bookmark App")}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {t("A bookmark app that allows you to save your favorite.")}
                  </p>
                  <a
                    href="https://github.com/ozcaneren/bookmark-app"
                    className="inline-flex items-center mt-14 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {t("Go to Project")}
                    <BiRightArrowAlt size={20} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img
                    className="rounded-t-lg object-fill bg-[#6EA1B0]"
                    src={Chatapp}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl mt-2 font-bold tracking-tight text-gray-900 dark:text-white">
                      {t("Real Time Chat App")}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {t(
                      "A real time chat app that allows you to chat with your."
                    )}
                  </p>
                  <a
                    href="https://github.com/ozcaneren/real-time-chat-app"
                    className="inline-flex items-center px-3 py-2 mt-14 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {t("Go to Project")}
                    <BiRightArrowAlt size={20} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img
                    className="rounded-t-lg object-fill w-[382px] h-[382px] bg-[#6EA1B0]"
                    src={Todo}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl mt-2 font-bold tracking-tight text-gray-900 dark:text-white">
                      {t("Todo List App")}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {t(
                      "A todo list app that allows you to save your daily tasks."
                    )}
                  </p>
                  <a
                    href="https://github.com/ozcaneren/todo-with-react-firebase"
                    className="inline-flex items-center mt-14 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {t("Go to Project")}
                    <BiRightArrowAlt size={20} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img
                    className="rounded-t-lg object-fill w-[382px] h-[382px] bg-[#6EA1B0]"
                    src={Todo}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl mt-2 font-bold tracking-tight text-gray-900 dark:text-white">
                      {t("Todo List App")}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {t(
                      "A todo list app that allows you to save your daily tasks."
                    )}
                  </p>
                  <a
                    href="https://github.com/ozcaneren/todo-with-react-firebase"
                    className="inline-flex items-center mt-14 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {t("Go to Project")}
                    <BiRightArrowAlt size={20} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img
                    className="rounded-t-lg object-fill w-[382px] h-[382px] bg-[#6EA1B0]"
                    src={Todo}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl mt-2 font-bold tracking-tight text-gray-900 dark:text-white">
                      {t("Todo List App")}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {t(
                      "A todo list app that allows you to save your daily tasks."
                    )}
                  </p>
                  <a
                    href="https://github.com/ozcaneren/todo-with-react-firebase"
                    className="inline-flex items-center mt-14 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {t("Go to Project")}
                    <BiRightArrowAlt size={20} className="ml-2" />
                  </a>
                </div>
              </div>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <img
                    className="rounded-t-lg object-fill w-[382px] h-[382px] bg-[#6EA1B0]"
                    src={Todo}
                    alt=""
                  />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl mt-2 font-bold tracking-tight text-gray-900 dark:text-white">
                      {t("Todo List App")}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {t(
                      "A todo list app that allows you to save your daily tasks."
                    )}
                  </p>
                  <a
                    href="https://github.com/ozcaneren/todo-with-react-firebase"
                    className="inline-flex items-center mt-14 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {t("Go to Project")}
                    <BiRightArrowAlt size={20} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Divide />
          <Footer className=" fixed bottom-0 left-0 w-full bg-gray-200 dark:bg-[#202125] p-10 text-center" />
        </div>
      </div>
    </>
  );
}

export default Projects;
