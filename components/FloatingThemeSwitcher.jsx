"use client";

import { useTheme } from "next-themes";
import { BsStars, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";

export const FloatingThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Minimize when scrolling down past 100px
      if (currentScrollY > 100) {
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
        isMinimized ? "w-12 h-12" : "w-14 h-14"
      } ${
        currentTheme === "dark"
          ? "bg-white text-black hover:bg-gray-200"
          : "bg-black text-white hover:bg-gray-800"
      }`}
      aria-label="Toggle theme"
      title={`Switch to ${currentTheme === "dark" ? "light" : "dark"} mode`}
    >
      {currentTheme === "dark" ? (
        <BsSun className={isMinimized ? "text-lg" : "text-xl"} />
      ) : (
        <BsStars className={isMinimized ? "text-lg" : "text-xl"} />
      )}
    </button>
  );
};
