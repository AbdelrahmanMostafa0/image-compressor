"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    // Sync with user's system preferences or saved preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="absolute bottom-5 text-black dark:text-white right-5  h-12 w-12 rounded-full flex items-center justify-center bg-white dark:shadow-white dark:bg-slate-950 drop-shadow-lg"
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};
export default Navbar;
