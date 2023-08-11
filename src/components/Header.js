import Switcher from "./Switcher";
import React, { useState } from "react";
import Translate from "./Translate";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
  const [currentLang, setCurrentLang] = useState("en");

  const handleLanguageToggle = () => {
    const newLang = currentLang === "tr" ? "en" : "tr";
    setCurrentLang(newLang);
  };

  const { t } = useTranslation();

  return (
    <header className="header md:sticky top-0 dark:text-gray-300 shadow-xl flex items-center justify-center px-8 py-02 rounded-md bg-gray-200 dark:bg-[#373A43] z-10">
      <nav className="nav font-medium md:font-semibold text-md md:text-lg">
        <ul className="grid grid-cols-3 md:flex md:items-center text-center gap-3 md:gap-5">
          <li className="p-4 border-b-2 dark:border-b-2 border-gray-500 dark:border-gray-200 border-opacity-0 dark:border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-100 hover:text-gray-500 dark:hover:text-gray-100 duration-200 cursor-pointer active">
            <Link to="/">{t("Home")}</Link>
          </li>
          <li className="p-4 border-b-2 dark:border-b-2 border-gray-500 dark:border-gray-200 border-opacity-0 dark:border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-100 hover:text-gray-500 dark:hover:text-gray-100 duration-200 cursor-pointer">
            <Link to="/projects">{t("Projects")}</Link>
          </li>
          <li className="p-4 border-b-2 dark:border-b-2 border-gray-500 dark:border-gray-200 border-opacity-0 dark:border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-100 hover:text-gray-500 dark:hover:text-gray-100 duration-200 cursor-pointer">
            <Link to="/contact">{t("Contact")}</Link>
          </li>
          <li className="flex items-center justify-center p-4 border-b-2 dark:border-b-2 border-gray-500 dark:border-gray-200 border-opacity-0 dark:border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-100 hover:text-gray-500 dark:hover:text-gray-100 duration-200 cursor-pointer">
            <button
              onClick={handleLanguageToggle}
            >
              <Translate lang={currentLang} text={`${currentLang.toUpperCase()}`} />
            </button>
          </li>
          <li className="flex items-center justify-center p-4 border-b-2 dark:border-b-2 border-gray-500 dark:border-gray-200 border-opacity-0 dark:border-opacity-0 hover:border-opacity-100 dark:hover:border-opacity-100 hover:text-gray-500 dark:hover:text-gray-100 duration-200 cursor-pointer">
            <Switcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}
