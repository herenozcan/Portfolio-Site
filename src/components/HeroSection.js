import me from '../images/100240225.png'

import { useTranslation } from 'react-i18next';


export default function HeroSection() {

  const { t } = useTranslation();

  return(
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center mb-9 mt-9">
        <div className="pt-5">
          <img className="w-50 h-60 rounded-lg" src={me} alt="img"/>
        </div>
        <div className="pt-12">
          <div className="animate-fade-in-down mb-1 text-center text-xl font-bold dark:text-gray-300 md:ml-12">Eren Ozcan</div>
          <div className="animate-fade-in-down mb-8 text-center text-lg dark:text-gray-300 md:ml-12">{t('Full Stack Web Developer')}</div>
          <blockquote>
            <p className="animate-fade-in-down mx-12 mb-9 md:pl-10 text-center text-lg dark:text-gray-300">
            {t('Hey there, I am Eren. I enjoy coding.')} <br /> {t('I am constantly improving my coding skills.')}
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  )
}
