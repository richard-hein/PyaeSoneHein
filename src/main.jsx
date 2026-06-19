import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntlProvider } from "react-intl";
import { IntlProviderWrapper } from "./locales/i18n/IntelProviderWrapper.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <IntlProviderWrapper>
      <App />
    </IntlProviderWrapper>
  </StrictMode>,
);
