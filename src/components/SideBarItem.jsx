import Icon from "./Icon";
import "./SideBarItem.css";

const SideBarItem = ({ text, iconSrc, selected }) => {
  let classes = ["side-bar-item"];
  if (selected) classes.push("side-bar-item-selected");
  
  return (
    <li className={classes.join(" ")}>
      <Icon src={iconSrc} className="side-bar-item-icon" alt="icon" />
      {text}
    </li>
  );
};

export default SideBarItem;
