import { useCallback } from "react";
import Icon from "./Icon";
import "./SideBarItem.css";

const SideBarItem = ({ text, value, iconSrc, selected, onClick }) => {
  let classes = ["side-bar-item"];
  if (selected) classes.push("side-bar-item-selected");

  const handleClick = useCallback(() => {
    if (!onClick) return;
    onClick(value);
  }, [onClick, value]);

  return (
    <li onClick={handleClick} className={classes.join(" ")}>
      <Icon src={iconSrc} className="side-bar-item-icon" alt="icon" />
      {text}
    </li>
  );
};

export default SideBarItem;
