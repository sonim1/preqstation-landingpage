import { createContext, useContext, type ReactNode } from "react";
import type { Translations } from "./index";
import en from "./en";

const I18nContext = createContext<Translations>(en);

export function I18nProvider({ translations, children }: { translations: Translations; children: ReactNode }) {
  return <I18nContext.Provider value={translations}>{children}</I18nContext.Provider>;
}

export function useT(): Translations {
  return useContext(I18nContext);
}
