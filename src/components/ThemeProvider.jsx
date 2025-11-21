// src/components/ThemeProvider.jsx
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  // default to 'dark' so SSR/hydration will match the _document default.
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // sync initial theme with what _document set before hydration
    const htmlHasDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
    setTheme(htmlHasDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (!theme) return;
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
