import { useFormThemeContext } from "../context/FormThemeProvider";
import "./ThemeList.css";
import { ThemeListItem } from "./ThemeListItem";

export const ThemeList = () => {
  const { themes } = useFormThemeContext();
  return (
    <div className="theme-list-container">
      <div className="theme-list-inner-container">
        {themes.map((t, i) => (
          <ThemeListItem key={i} item={t} />
        ))}
      </div>
    </div>
  );
};

export default ThemeList;
