import { useState, useEffect } from "react";
import styles from "../styles/component style/ThemeToggle.module.css";

export default function ThemeToggle() {
  const useTheme = () => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    };

    useEffect(() => {
      const savedTheme = localStorage.getItem("theme") || "dark";
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    return { theme, toggleTheme };
  };

  return (
    <>
      <label className={`${styles.themeToggle}`}>
        <input type="checkbox" className={`${styles.themeToggleInput}`} />
        <span className={`${styles.themeToggleSlider}`} />
      </label>
    </>
  );
}
