import { BsTelephone } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { useTranslation } from 'react-i18next';


export default function Footer() {

  const { t } = useTranslation();


  return(
    <div className="mx-12 bg-gray-200 dark:bg-[#202125] sm:rounded-lg text-center">
      <h1 className="text-2xl sm:text-3xl text-gray-800 dark:text-white font-extrabold tracking-tight">
        {t('Get in touch')}
      </h1>
      <div className="flex md:flex-row flex-col items-center text-center justify-center pt-7 pb-6 gap-4">
        <div className="flex items-center text-center mt-4 text-gray-900 dark:text-gray-400">
          <SlLocationPin size={30} />
          <div className="text-md tracking-wide font-semibold w-40">
            Mugla, Turkey
          </div>
        </div>

        <div className="flex items-center gap-4 text-center mt-4 text-gray-900 dark:text-gray-400">
          <BsTelephone size={28} />
          <div className="text-md tracking-wide font-semibold w-40">
            <a href="tel:+905537749798">+905537749798</a>
          </div>
        </div>
      </div>
    </div>
  )
}