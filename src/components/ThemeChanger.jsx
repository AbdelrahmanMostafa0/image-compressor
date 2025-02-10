"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
const ThemeChanger = () => {
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
      className="absolute bottom-5 text-black dark:text-white right-5  h-12 w-12 rounded-full flex items-center justify-center bg-lightMode-background  dark:bg-darkMode-background drop-shadow-lg"
    >
      {darkMode ? (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 90 }}
          transition={{ duration: 0.5, repeatType: "reverse" }}
        >
          <Sun />
        </motion.div>
      ) : (
        <motion.div>
          <Moon />
        </motion.div>
      )}
    </button>
  );
};
export default ThemeChanger;
