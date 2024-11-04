import { NextUIProvider } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import Wagmi from "./Wami";
import ReactQuery from "./ReactQuery";

const Providers = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <Wagmi>
      <ReactQuery>
        <NextUIProvider>{children}</NextUIProvider>
      </ReactQuery>
    </Wagmi>
  )
}

export default Providers