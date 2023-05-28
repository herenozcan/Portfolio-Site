import React from 'react';
import i18n from "i18next";


function TranslateTr() {
  const clickHandle = async lang => {
    await i18n.changeLanguage(lang)
  }

  return (
    <div>
      <button onClick={() => clickHandle("tr")}>TR</button>
    </div>
  )

}

export default TranslateTr