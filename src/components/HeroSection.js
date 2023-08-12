import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center mb-9 mt-9">
        <div className="pt-12">
          <div className="animate-fade-in-down mb-1 text-center text-2xl font-bold dark:text-gray-300 md:ml-12">
            Eren Ozcan
          </div>
          <div className="animate-fade-in-down mb-8 text-center text-xl dark:text-gray-300 md:ml-12">
            {t("Full Stack Web Developer")}
          </div>
          <blockquote>
            <p className="animate-fade-in-down mx-12 mb-9 md:pl-10 text-center text-xl dark:text-gray-300">
              "Hello! I enjoy coding and find great pleasure in continuous
              learning. In this era of rapid technological advancement, every
              new piece of knowledge and skill is an opportunity for me. Pushing
              boundaries in the realm of code and evolving within projects is my
              foremost passion. I love both individual and teamwork, and I
              continue to grow by learning something new every day."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
