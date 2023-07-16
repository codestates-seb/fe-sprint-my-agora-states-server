import { useState, useCallback, useLayoutEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState('light');

  const onChangeTheme = useCallback(() => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(updatedTheme);
    window.localStorage.setItem('mode', updatedTheme);
  }, [theme]);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      return setTheme('dark');

    const theme = window.localStorage.getItem('mode');

    setTheme(theme);
  }, []);

  return { theme, onChangeTheme };
}

export default useTheme;
