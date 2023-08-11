import React from 'react';
import i18n from 'i18next';

function TranslateComponent({ lang, text }) {
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => clickHandle(lang)}>{text}</button>
    </div>
  );
}

export default TranslateComponent;
