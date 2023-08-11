import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

const resources = {
  tr: {
    translation: {
      "Home": "Ana Sayfa",
      "Projects": "Projeler",
      "Contact": "İletişim",
      "Get in touch": "Temasa Geçin",
      "Hey there, I am Eren. I enjoy coding.": "Merhaba, ben Eren. Kod yazmaktan keyif alıyorum.",
      "I am constantly improving my coding skills.": "Kod yazma becerilerimi sürekli geliştiriyorum.",
      "Hello! I enjoy coding and find great pleasure in continuous learning. In this era of rapid technological advancement, every new piece of knowledge and skill is an opportunity for me. Pushing boundaries in the realm of code and evolving within projects is my foremost passion. I love both individual and teamwork, and I continue to grow by learning something new every day.":"Merhaba! Kodlamayı seviyor ve sürekli öğrenmekten büyük keyif alıyorum. Teknolojinin hızla ilerlediği bu dönemde, her yeni bilgi ve beceri benim için bir fırsat. Kodların dünyasında sınırları zorlamak ve projelerde kendimi geliştirmek en büyük tutkum. Hem bireysel olarak hem de ekip içinde çalışmayı seviyor, her gün yeni bir şeyler öğrenerek büyümeye devam ediyorum.",
      "Full Stack Web Developer": "Full Stack Web Geliştirici",
      "PROJECTS": "PROJELER",
      "Getir Website Clone": "Getir Web Sitesi Klonu",
      "HTML/CSS Designs": "HTML/CSS Tasarımları",
      "Python Projects": "Python Projeleri",
      "SpaceX Clone": "SpaceX Klonu",
      "Lemon Kingdom": "Limon Krallığı",
      "Toggle Dark Light Mode": "Koyu Açık Modu Değiştir",
      "CSS Nesting": "CSS Yerleşimi",
      "Fake Store API": "Sahte Mağaza API",
      "About": "Hakkımda"
    }
  },
  en: {
    translation: {
      "Home": "Home",
      "Projects": "Projects",
      "Contact": "Contact",
      "About": "About",
      "Get in touch": "Get in touch",
      "Hey there, I am Eren. I enjoy coding.": "Hey there, I am Eren. I enjoy coding.",
      "I am constantly improving my coding skills.": "I am constantly improving my coding skills.",
      "Hello! I enjoy coding and find great pleasure in continuous learning. In this era of rapid technological advancement, every new piece of knowledge and skill is an opportunity for me. Pushing boundaries in the realm of code and evolving within projects is my foremost passion. I love both individual and teamwork, and I continue to grow by learning something new every day.": "Hello! I enjoy coding and find great pleasure in continuous learning. In this era of rapid technological advancement, every new piece of knowledge and skill is an opportunity for me. Pushing boundaries in the realm of code and evolving within projects is my foremost passion. I love both individual and teamwork, and I continue to grow by learning something new every day.",
      "Full Stack Web Developer": "Full Stack Web Developer",
      "PROJECTS": "PROJECTS",
      "Getir Website Clone": "Getir Website Clone",
      "HTML/CSS Designs": "HTML/CSS Designs",
      "Python Projects": "Python Projects",
      "SpaceX Clone": "SpaceX Clone",
      "Lemon Kingdom": "Lemon Kingdom",
      "Toggle Dark Light Mode": "Toggle Dark Light Mode",
      "CSS Nesting": "CSS Nesting",
      "Fake Store": "Fake Store"
    }
  }
}

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    resources
  })

export default i18n;