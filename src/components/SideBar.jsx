import { useState } from "react";
import { usePreviewContext } from "../context/PreviewProvider";
import PreviewSizeSelector from "./PreviewSizeSelector";
import "./SideBar.css";
import SideBarItem from "./SideBarItem";
import { ThemeSelector } from "./ThemeSelector";

const SideBar = ({ menuItems, children }) => {
  const [selectedIndex, setSelectedIndex] = useState();
  const { setPreviewSize, previewSize } = usePreviewContext();

  return (
    <div className="side-bar-container">
      <PreviewSizeSelector
        previewSize={previewSize}
        onSelect={(size) => setPreviewSize(size)}
      />
      <div className="side-bar">
        <ul>
          {children}
          {menuItems.map((item, i) => (
            <SideBarItem
              key={i}
              value={item.type}
              text={item.name}
              iconSrc={item.icon}
              selected={item.type === selectedIndex}
              onClick={(value) => setSelectedIndex(value)}
              menu={item.type === "theme" ? <ThemeSelector /> : null}
            />
          ))}
        </ul>
      </div>
      <div className="side-bar-page">
        <span>Next Form 1/4</span>
        <img src="./icons/Arrow-NextForm-icon.svg" alt="next page" />
      </div>
    </div>
  );
};
export default SideBar;
