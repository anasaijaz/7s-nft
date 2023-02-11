import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { chains, client } from "./wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <WagmiConfig client={client}>
            <RainbowKitProvider chains={chains}>
              <App />
            </RainbowKitProvider>
          </WagmiConfig>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
