// ThemeToggle.tsx
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-black shadow-md transition-all"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-purple-600" />}
    </button>
  );
};
