import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="mx-12 text-center pt-9 pb-9">
      <Slider {...settings}>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg bg-[#5D3EBC]">
            <img alt="ecommerce" className="block h-[260px] w-full object-cover object-center cursor-pointer" src="https://cdn.getir.com/marketing/Getir_Logo_1621812382342.png" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest dark:text-gray-200 text-gray-500">PROJECT</h3>
            <a className="title-font text-lg font-medium text-gray-900 dark:text-gray-300" href="https://github.com/herenozcan/Getir-React-Duplicate">Getir Website Clone</a>
            <p className="mt-1 dark:text-gray-400">20/10/2022</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg">
            <img alt="ecommerce" className="block h-[260px] w-full object-cover object-center cursor-pointer rounded-md" src="https://studio.uxpincdn.com/studio/wp-content/uploads/2021/05/Want-to-Convert-Design-To-Code_-Heres-A-Better-Way.png.webp" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-gray-200">PROJECT</h3>
            <a className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"  href="https://github.com/herenozcan/HTML-CSS-Designs">HTML/CSS Design's</a>
            <p className="mt-1 dark:text-gray-400">17/08/2022</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg">
            <img alt="ecommerce" className="block h-[260px] w-full object-cover object-center cursor-pointer" src="https://wallpaperbat.com/img/193513-python-wallpaper-awesome-55-programming-hd-wallpaper-python.jpg" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-gray-200">PROJECT</h3>
            <a className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"  href="https://github.com/herenozcan/Python-Projects">Python Projects</a>
            <p className="mt-1 dark:text-gray-400">12/11/2021</p>
          </div>
        </div>
        <div className="w-full p-4">
          <div className="block h-30 overflow-hidden rounded-lg">
            <img alt="ecommerce" className="block h-[260px] w-full object-cover object-center cursor-pointer" src="https://www.pixelstalk.net/wp-content/uploads/images6/SpaceX-Wallpaper-HD-Free-download.jpg" />
          </div>
          <div className="mt-4 text-center">
            <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500 dark:text-gray-200">PROJECT</h3>
            <a className="title-font text-lg font-medium text-gray-900 dark:text-gray-300"  href="https://github.com/herenozcan/SpaceX-Clone">SpaceX Clone</a>
            <p className="mt-1 dark:text-gray-400">28/08/2022</p>
          </div>
        </div>
      </Slider>
    </div>  
  )
}