import { Button } from "@nextui-org/react";

import './App.css'
import { useCountStore } from "./store/countStore";
import { useTranslation } from "react-i18next";

function App() {
  const { count, setCount } = useCountStore(state => state);
  const { t, i18n: { changeLanguage, language } } = useTranslation("home");
  console.log("🚀 ~ App ~ language:", language)

  const changeLng = (lng: string) => {
    changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  }

  return (
    <div className="bg-gray-50">
      <span>{count}</span>
      <Button color="primary" onClick={() => setCount(count + 1)}>Button</Button>
      <p>{t("welcome")}</p>
      <p>{t("translation:common")}</p>
      <Button color="primary" onClick={() => changeLng("fr")}>Change Language to French</Button>
      <Button color="primary" onClick={() => changeLng("en")}>Change Language to English</Button>
      <w3m-button />
    </div>
  )
}

export default App
