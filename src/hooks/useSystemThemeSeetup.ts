import { useEffect, useState } from "react";

type UseSystemDarkModeToggleReturnType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

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
    setDarkMode(systemDarkModeEnabled);
    localStorage.setItem("darkMode", JSON.stringify(systemDarkModeEnabled));

    const updateDarkModePreference = (value: boolean) => {
      setDarkMode(value);
      localStorage.setItem("darkMode", JSON.stringify(value));
    };

    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) =>
      updateDarkModePreference(e.matches);
    mediaQueryList.addListener(handleChange);

    return () => {
      mediaQueryList.removeListener(handleChange);
    };
  }, []);

  return [isDarkMode, setDarkMode];
};

export default useSystemThemeSetup;
