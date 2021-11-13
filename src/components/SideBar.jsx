import { useState } from "react";
import Icon from "./Icon";
import "./SideBar.css";
import SideBarItem from "./SideBarItem";

const SideBar = ({ menuItems, children }) => {
  const [selectedIndex, setSelectedIndex] = useState();

  return (
    <div className="side-bar-container">
      <div className="preview-selector">
        <Icon
          size="small"
          src="./icons/Preview-Form-icons/Desktop.svg"
          alt="desctip"
        />
        <Icon size="small" src="./icons/Preview-Form-icons/Pad.svg" alt="pad" />
        <Icon
          size="small"
          src="./icons/Preview-Form-icons/Phone.svg"
          alt="phone"
        />
      </div>
      <ul className="side-bar">
        {children}
        {menuItems.map((item, i) => (
          <SideBarItem
            key={i}
            value={item.type}
            text={item.name}
            iconSrc={item.icon}
            selected={item.type === selectedIndex}
            onClick={(value) => setSelectedIndex(value)}
          />
        ))}
      </ul>
      <div className="side-bar-page">
        <span>Next Form 1/4</span>
        <img src="./icons/Arrow-NextForm-icon.svg" alt="next page" />
      </div>
    </div>
  );
};
export default SideBar;
