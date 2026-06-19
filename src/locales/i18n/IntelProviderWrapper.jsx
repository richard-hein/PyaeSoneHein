// i18n/IntlProviderWrapper.tsx
import { IntlProvider } from "react-intl";
import { LocaleContext } from "./LocaleContext";
import { ReactNode, useState, useMemo } from "react";
import en from "../en.json";
import jp from "../jp.json";

const messages = { en, jp };

export function IntlProviderWrapper({ children }) {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "en");

  const switchLocale = (newLocale) => {
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  };

  const value = useMemo(() => ({ locale, switchLocale }), [locale]);

  return (
    <LocaleContext.Provider value={value}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}
