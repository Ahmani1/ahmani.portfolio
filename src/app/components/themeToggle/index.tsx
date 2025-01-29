"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          className="sr-only"
        />
        <div
          className={`w-14 h-8 rounded-full shadow-inner transition-colors duration-300 ease-in-out 
                      ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}
        ></div>
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out 
                      ${isDarkMode ? "translate-x-6 bg-gray-200" : "bg-gray-800"}`}
        >
          <div className="flex items-center justify-center h-full">
            {isDarkMode ? (
              <FaMoon className="text-gray-800 w-4 h-4" />
            ) : (
              <FaSun className="text-gray-200 w-4 h-4" /> 
            )}
          </div>
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;