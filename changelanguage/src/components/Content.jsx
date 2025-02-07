import { useContext } from "react";
import translations from "/public/translations/translations.json";
import { LanguageContext } from "../context/LanguageContext";

export const Content = () => {
  const { language, setLanguage } =
    useContext(LanguageContext);
  const currentTranslations = translations[language];

  return (
    <>
      <h1>{currentTranslations.welcome}</h1>
      <p>{currentTranslations.about}</p>

      {/* <button onClick={handleLanguage}>change</button> */}
      {/*<button onClick={() => handleLanguage()}>
        English
      </button>
      <button onClick={() => handleLanguage("fr")}>
        Français
      </button> */}
    </>
  );
};
