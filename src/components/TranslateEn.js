import React from 'react';
import i18n from "i18next";


function TranslateEn() {
  const clickHandle = async lang => {
    await i18n.changeLanguage(lang)
  }

  return (
    <div>
      <button onClick={() => clickHandle("en")}>EN</button>
    </div>
  )

}

export default TranslateEn