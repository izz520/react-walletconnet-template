import { defineChain } from '@reown/appkit/networks';

// Define the custom network
export const algenL2Test = defineChain({
  id: 8922,
  caipNetworkId: 'eip155:8922',
  chainNamespace: 'eip155',
  name: 'ALgen L2 Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ALG',
    symbol: 'ALG',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.alg2-test.algen.network/']
    },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://scan.alg2-test.algen.network/' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 2070728,
    },
  },
})