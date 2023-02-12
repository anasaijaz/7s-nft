import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { polygonMumbai, polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY! }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "XiDTech-NFT",
  chains,
});

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains };
