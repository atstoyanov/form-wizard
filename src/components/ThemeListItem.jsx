import "./ThemeListItem.css";

export const ThemeListItem = ({ item }) => {
  return (
    <div className="theme-list-item">
      <img src={item.preview} alt="Theme" />
    </div>
  );
};
