import { PropsWithChildren } from 'react'
import { WagmiProvider } from 'wagmi'
import { wagmiAdapter } from '../../../libs/appkitConfig'

const Wagmi = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>{children}</WagmiProvider>
  )
}

export default Wagmi