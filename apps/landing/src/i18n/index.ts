import en from "./en";
import ko from "./ko";

export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const translations = { en, ko } as const;

export type Translations = typeof en;

export function getTranslations(locale: Locale = defaultLocale): Translations {
  return translations[locale] ?? translations[defaultLocale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split("/");
  if (locales.includes(segment as Locale)) return segment as Locale;
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}

export function getGuideDocPath(locale: Locale, slug: string): string {
  return locale === "ko" ? `/guide/ko/${slug}` : `/guide/${slug}`;
}
