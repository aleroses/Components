import { useContext } from "react";
import { Content } from "./components/Content";
import { LanguageProvider } from "./context/LanguageProvider";

import translations from "/public/translations/translations.json";
import { LanguageContext } from "./context/LanguageContext";
import { About } from "./components/About";

function App() {
  const { language, setLanguage } =
    useContext(LanguageContext);

  const handleLanguage = () => {
    language === "en"
      ? setLanguage("es")
      : setLanguage("en");
  };

  return (
    <>
      <Content />
      <About />
      <button onClick={handleLanguage}>change</button>
    </>
  );
}

export default App;
