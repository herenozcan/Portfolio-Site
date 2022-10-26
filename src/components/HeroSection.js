export default function HeroSection() {
  return (
    <div className="container min-w-full">
      <div className="">
        <div className="pt-5">
          <div className="flex justify-center">
            <img className="h-52 w-52 rounded-lg mb-4" src="https://i.hizliresim.com/ls7qonb.jpeg" alt="img"/>
          </div>
          <div className="animate-fade-in-down mb-1 text-center text-xl font-bold dark:text-gray-300">Eren Ozcan</div>
          <div className="animate-fade-in-down mb-8 text-center text-lg dark:text-gray-300">Front-End Developer</div>
          <blockquote>
            <p className="animate-fade-in-down mx-12 mb-9 text-center text-lg dark:text-gray-300">
              Hey there, I am Eren. I enjoy coding. I am constantly improving my coding skills.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}