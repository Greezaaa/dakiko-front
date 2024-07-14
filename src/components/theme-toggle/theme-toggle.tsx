import MoonIcon from "@components/Icons/MoonIcon";
import SunIcon from "@components/Icons/SunIcon";

import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);

    if (savedDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <div className="theme-toggle">
      <button
        className="toggle-btn"
        onClick={toggleDarkMode}
        title={isDarkMode ? "Toggle Dark" : "Toggle Light"}
      >
        {!isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
