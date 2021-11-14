import { useFormThemeContext } from "../context/FormThemeProvider";
import "./ThemeList.css";
import { ThemeListItem } from "./ThemeListItem";

export const ThemeList = ({ activeTheme, onSelect }) => {
  const { themes } = useFormThemeContext();
  const handleSelect = (item) => onSelect && onSelect(item);

  return (
    <div className="theme-list-container">
      <div className="theme-list-inner-container">
        {themes.map((t, i) => (
          <ThemeListItem
            key={i}
            item={t}
            onClick={handleSelect}
            selected={t.id === activeTheme?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeList;
