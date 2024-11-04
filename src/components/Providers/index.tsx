import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";

const Providers = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <NextUIProvider>{children}</NextUIProvider>
  )
}

export default Providers