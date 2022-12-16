import { ThemeContext } from "@core/providers/theme";
import { useContext } from "react";

const useTheme = () => {
  const { toggle } = useContext(ThemeContext);
  return { toggle };
};

export default useTheme;
