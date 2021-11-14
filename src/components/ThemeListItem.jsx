import "./ThemeListItem.css";

export const ThemeListItem = ({ item }) => {
  return (
    <div className="theme-list-item">
      <div className="theme-list-item-inner">
        <img src={item.preview} alt="Theme" />
        <span style={{ fontSize: "12px" }}>
          This form has <strong>{item.steps} steps.</strong>
        </span>
      </div>
    </div>
  );
};
