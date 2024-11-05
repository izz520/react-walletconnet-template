import { createAppKit } from '@reown/appkit/react'
import { arbitrum, mainnet } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { algenL2Test } from './algen2'


// 1. Get projectId from https://cloud.reown.com
const projectId = 'b9ac47c964789547948ad337622fec85'

// 2. Create a metadata object - optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// 3. Set the networks
const networks = [arbitrum, mainnet, algenL2Test]

// 4. Create Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  networks: networks as any,
  projectId,
  metadata,
  enableWalletConnect: false,
  features: {
    email: false,
    socials: false,
    swaps: false,
    analytics: false // Optional - defaults to your Cloud configuration
  }
})