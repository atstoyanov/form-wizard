import { useFormThemeContext } from "../context/FormThemeProvider";
import ThemeList from "./ThemeList";

export const ThemeSelector = () => {
  const { setActiveTheme, activeTheme } = useFormThemeContext();

  return (
    <ThemeList
      onSelect={(item) => setActiveTheme(item.id)}
      activeTheme={activeTheme}
    />
  );
};
