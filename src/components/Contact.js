export default function Contact() {
  return(
    <div className="mx-12 bg-gray-200 dark:bg-[#202125] sm:rounded-lg text-center pb-8">
      <h1 className="text-2xl sm:text-3xl text-gray-800 dark:text-white font-extrabold tracking-tight">
        Get in touch
      </h1>
      <div className="flex md:flex-row flex-col items-center text-center justify-center mr-5">
        <div className="flex items-center text-center mt-4 text-gray-900 dark:text-gray-400">
          <div className="md:ml-3">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                 viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <div className="md:ml-4 text-md tracking-wide font-semibold w-40">
            Mugla, Turkey
          </div>
        </div>

        <div className="flex items-center text-center md:mt-4 md:ml-4 text-gray-900 dark:text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
               viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <div className="md:ml-4 text-md tracking-wide font-semibold w-40">
            <a href="tel:+905537749798">+905537749798</a>
          </div>
        </div>

        <div className="flex items-center text-center md:mt-4 md:ml-4 text-gray-900 dark:text-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
               viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <div className="md:ml-4 text-md tracking-wide font-semibold w-40">
            <a href="mailto:herenozcan17@gmail.com">herenozcan17@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}