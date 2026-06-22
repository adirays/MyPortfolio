import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return (localStorage.getItem("portfolio-theme") as Theme) ?? "light";
    } catch {
      return "light";
    }
  });

  const toggle = () => {
    setTheme(t => {
      const next = t === "light" ? "dark" : "light";
      try { localStorage.setItem("portfolio-theme", next); } catch {}
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
