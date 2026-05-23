import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';
type ThemeSource = 'auto' | 'manual';

function getAutoTheme(): Theme {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

function getCurrentTime(): string {
  return new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
}

function getSavedOverride(): Theme | null {
  try {
    const saved = localStorage.getItem('cb-theme-override');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {}
  return null;
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = getSavedOverride();
    return saved ?? getAutoTheme();
  });

  const [source, setSource] = useState<ThemeSource>(() => {
    return getSavedOverride() ? 'manual' : 'auto';
  });

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  // Auto re-check every 60 minutes if no manual override
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        if (!localStorage.getItem('cb-theme-override')) {
          setTheme(getAutoTheme());
          setSource('auto');
        }
      } catch {}
    }, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Update clock every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    setSource('manual');
    try { localStorage.setItem('cb-theme-override', next); } catch {}
  }, [theme]);

  const resetToAuto = useCallback(() => {
    try { localStorage.removeItem('cb-theme-override'); } catch {}
    const auto = getAutoTheme();
    setTheme(auto);
    setSource('auto');
  }, []);

  return { theme, source, toggle, resetToAuto, currentTime };
}