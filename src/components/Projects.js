import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import darkLight from "../images/darklightmode.jpg";
import fakeStore from "../images/fakestore.png";
import cssNesting from "../images/css-nesting.png";
import Bookmark from "../images/bookmark1.png";
import getir from "../images/getir.png";
import todo from "../images/to-do-list-apps.png"

export default function Projects() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { t } = useTranslation();

  return (
    <div className="mx-12 text-center pt-9 pb-9">
      <h1 className="text-xl font-semibold pb-4 text-gray-700 dark:text-gray-400">
        {t("Projects")}
      </h1>
      <Slider {...settings}>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg bg-[#5D3EBC]">
            <img
              alt="ecommerce"
              className="block h-[260px] w-full object-cover object-center cursor-pointer"
              src={getir}
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest dark:text-gray-200 text-gray-500">
              {t("PROJECT")}
            </h3>
            <a
              className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"
              href="https://github.com/ozcaneren/Getir-React-Duplicate"
            >
              {t("Getir Website Clone")}
            </a>
            <p className="mt-1 dark:text-gray-400">20/10/2022</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg">
            <img
              alt="ecommerce"
              className="block h-[260px] w-full object-cover bg-[#f38e67] object-center cursor-pointer rounded-md"
              src={Bookmark}
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-gray-200">
              {t("PROJECT")}
            </h3>
            <a
              className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"
              href="https://github.com/ozcaneren/HTML-CSS-Designs"
            >
              {t("Bookmark App")}
            </a>
            <p className="mt-1 dark:text-gray-400">03/08/2023</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg">
            <img
              alt="ecommerce"
              className="block h-[260px] w-full object-cover object-center cursor-pointer"
              src="https://wallpaperbat.com/img/193513-python-wallpaper-awesome-55-programming-hd-wallpaper-python.jpg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-gray-200">
              {t("PROJECT")}
            </h3>
            <a
              className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"
              href="https://github.com/ozcaneren/Python-Projects"
            >
              {t("Python Projects")}
            </a>
            <p className="mt-1 dark:text-gray-400">12/11/2021</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg">
            <img
              alt="ecommerce"
              className="block h-[260px] w-full object-cover object-center cursor-pointer"
              src="https://www.pixelstalk.net/wp-content/uploads/images6/SpaceX-Wallpaper-HD-Free-download.jpg"
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-gray-200">
              {t("PROJECT")}
            </h3>
            <a
              className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"
              href="https://github.com/ozcaneren/SpaceX-Clone"
            >
              {t("SpaceX Clone")}
            </a>
            <p className="mt-1 dark:text-gray-400">28/08/2022</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg">
            <img
              alt="ecommerce"
              className="block h-[260px] w-full object-cover object-center cursor-pointer bg-yellow-500"
              src={todo}
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-gray-200">
              {t("PROJECT")}
            </h3>
            <a
              className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"
              href="https://github.com/ozcaneren/SpaceX-Clone"
            >
              {t("Todo App")}
            </a>
            <p className="mt-1 dark:text-gray-400">28/07/2023</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg">
            <img
              alt="ecommerce"
              className="block h-[260px] w-full object-cover object-center cursor-pointer"
              src={darkLight}
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-gray-200">
              {t("PROJECT")}
            </h3>
            <a
              className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"
              href="https://github.com/ozcaneren/react-toggle-dark-mode"
            >
              {t("Toggle Dark Light Mode")}
            </a>
            <p className="mt-1 dark:text-gray-400">27/05/2023</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg">
            <img
              alt="ecommerce"
              className="block h-[260px] w-full object-cover object-center cursor-pointer"
              src={fakeStore}
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-gray-200">
              {t("PROJECT")}
            </h3>
            <a
              className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"
              href="https://github.com/ozcaneren/fake-store-api"
            >
              {t("Fake Store API")}
            </a>
            <p className="mt-1 dark:text-gray-400">25/05/2023</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg">
            <img
              alt="ecommerce"
              className="block h-[260px] w-full object-cover object-center cursor-pointer"
              src={cssNesting}
            />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-gray-200">
              {t("PROJECT")}
            </h3>
            <a
              className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"
              href="https://github.com/ozcaneren/css-nesting"
            >
              {t("CSS Nesting")}
            </a>
            <p className="mt-1 dark:text-gray-400">24/05/2023</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
