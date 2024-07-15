import { useEffect, useState } from "react";

type UseSystemDarkModeToggleReturnType = [boolean, (value: boolean) => void];

const useSystemThemeSetup = (): UseSystemDarkModeToggleReturnType => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const detectSystemDarkMode = () => {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    };

    const systemDarkModeEnabled = detectSystemDarkMode();
    applyTheme(systemDarkModeEnabled);

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => applyTheme(e.matches);
    mediaQueryList.addListener(handleChange);

    return () => {
      mediaQueryList.removeListener(handleChange);
    };
  }, []);
  const applyTheme = (isDark: boolean) => {
    setDarkMode(isDark);
    localStorage.setItem("darkMode", JSON.stringify(isDark));
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  return [isDarkMode, (value: boolean) => applyTheme(value)];
};

export default useSystemThemeSetup;
