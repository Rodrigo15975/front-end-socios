import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import {
  queryClient,
  LazyMotion,
  QueryClientProvider,
  ReactQueryDevtools,
  domAnimation,
} from "./config/index.ts";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById("root")!).render(
  <CookiesProvider>
    <PrimeReactProvider value={{ unstyled: false }}>
      <StrictMode>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <LazyMotion features={domAnimation}>
              <App />
            </LazyMotion>
            <ReactQueryDevtools buttonPosition="bottom-right" />
          </QueryClientProvider>
        </BrowserRouter>
      </StrictMode>
    </PrimeReactProvider>
  </CookiesProvider>
);
