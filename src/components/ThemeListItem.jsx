import "./ThemeListItem.css";

export const ThemeListItem = ({ item, selected, onClick }) => {
  let classes = ["theme-list-item"];
  if (selected) classes.push("theme-list-item-selected");

  return (
    <div onClick={() => onClick && onClick(item)} className={classes.join(" ")}>
      <div className="theme-list-item-selected-marker">
        <span>Selected</span>
      </div>
      <div className="theme-list-item-inner">
        <img src={item.preview} alt="Theme" />
        <span style={{ fontSize: "12px" }}>
          This form has <strong>{item.steps} steps.</strong>
        </span>
      </div>
    </div>
  );
};
