import React from "react";
import MoonIcon from "@components/Icons/MoonIcon";
import SunIcon from "@components/Icons/SunIcon";
import useSystemThemeSetup from "@hooks/useSystemThemeSetup";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setDarkMode] = useSystemThemeSetup();

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-toggle">
      <button
        className="toggle-btn"
        onClick={toggleDarkMode}
        title={isDarkMode ? "Toggle Light" : "Toggle Dark"}
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
