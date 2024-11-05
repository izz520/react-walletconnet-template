import { useTranslation } from "react-i18next";
import { useCountStore } from "../../store/countStore";
import { Button } from "@nextui-org/react";

const Home = () => {
  const { count, setCount } = useCountStore(state => state);
  const { t, i18n: { language } } = useTranslation("home");
  console.log("🚀 ~ App ~ language:", language)
  return (
    <div className="p-4">
      <span>{count}</span>
      <Button color="primary" onClick={() => setCount(count + 1)}>Button</Button>
      <p>{t("welcome")}</p>
      <p>{t("translation:common")}</p>
    </div>
  )
}

export default Home