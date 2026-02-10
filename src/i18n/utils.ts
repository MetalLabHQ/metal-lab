import { translations, defaultLang, type Lang } from "./translations";

/**
 * Get a translation helper bound to a specific language.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof translations)[typeof defaultLang]): string {
    return (translations[lang] as Record<string, string>)[key] ?? (translations[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/**
 * Get the language from a URL pathname like /en/... or /zh/...
 */
export function getLangFromUrl(url: URL): Lang {
  const [, langSegment] = url.pathname.split("/");
  if (langSegment in translations) {
    return langSegment as Lang;
  }
  return defaultLang;
}

/**
 * Return the path for the alternate language.
 */
export function getAlternateLangUrl(url: URL, targetLang: Lang): string {
  const [, , ...rest] = url.pathname.split("/");
  return `/${targetLang}/${rest.join("/")}`;
}
