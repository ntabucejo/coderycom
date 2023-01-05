"use client";

import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({ toggle: () => {} });

const Theme = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ toggle }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default Theme;
