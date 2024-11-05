import { useTranslation } from "react-i18next";
import { useCountStore } from "../../store/countStore";
import { Button } from "@nextui-org/react";
import { useBalance } from "wagmi";

const Home = () => {
  const { count, setCount } = useCountStore(state => state);
  const { t, i18n: { language } } = useTranslation("home");
  console.log("🚀 ~ App ~ language:", language)
  const { data } = useBalance({
    address: '0x3EC6880D3735a53CD27Ee13424442D1beEfb16D8',
  })
  console.log("🚀 ~ App ~ data:", data?.formatted)
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