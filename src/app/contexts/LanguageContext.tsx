import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Lang } from '../i18n/translations';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'vi',
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('cb-lang');
      if (stored === 'en' || stored === 'vi') return stored;
    } catch {}
    return 'vi';
  });

  useEffect(() => {
    try {
      localStorage.setItem('cb-lang', lang);
    } catch {}
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'vi' ? 'en' : 'vi'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
