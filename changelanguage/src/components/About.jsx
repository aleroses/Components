import { useContext } from "react";
import translations from "/public/translations/translations.json";
import { LanguageContext } from "../context/LanguageContext";

export const About = () => {
  const { language } = useContext(LanguageContext);
  const currentTranslations = translations[language];

  return <div>{currentTranslations.contact}</div>;
};
