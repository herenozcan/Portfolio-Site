export default function HeroSection() {
  return(
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center text-center">
        <div className="pt-5">
          <img className="w-50 h-60 rounded-lg" src="https://i.hizliresim.com/logetgk.png" alt="img"/>
        </div>
        <div className="pt-12">
          <div className="animate-fade-in-down mb-1 text-center text-xl font-bold dark:text-gray-300">Eren Ozcan</div>
          <div className="animate-fade-in-down mb-8 text-center text-lg dark:text-gray-300">Front-End Developer</div>
          <blockquote>
            <p className="animate-fade-in-down mx-12 mb-9 md:pl-10 text-center text-lg dark:text-gray-300">
              Hey there, I am Eren. I enjoy coding. <br /> I am constantly improving my coding skills.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}