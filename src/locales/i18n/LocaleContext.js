// i18n/LocaleContext.js
import { createContext, useContext } from "react";

export const LocaleContext = createContext(null);

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx)
    throw new Error("useLocale must be used within IntlProviderWrapper");
  return ctx;
};
