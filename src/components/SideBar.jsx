import { useState } from "react";
import {
  PREVIEW_SIZE_DESKTOP,
  PREVIEW_SIZE_MOBILE,
  PREVIEW_SIZE_TABLET,
} from "../constants/PreviewSizes";
import { usePreviewContext } from "../context/PreviewProvider";
import Icon from "./Icon";
import IconButtion from "./IconButton";
import "./SideBar.css";
import SideBarItem from "./SideBarItem";

const SideBar = ({ menuItems, children }) => {
  const [selectedIndex, setSelectedIndex] = useState();
  const { setPreviewSize, previewSize } = usePreviewContext();
  return (
    <div className="side-bar-container">
      <div className="preview-selector">
        {/* TODO Extract in separate component */}
        <IconButtion
          onClick={() => setPreviewSize(PREVIEW_SIZE_DESKTOP)}
          active={previewSize === PREVIEW_SIZE_DESKTOP}
          icon={
            <Icon
              size="small"
              src="./icons/Preview-Form-icons/Desktop.svg"
              alt="desctip"
            />
          }
        />
        <IconButtion
          onClick={() => setPreviewSize(PREVIEW_SIZE_TABLET)}
          active={previewSize === PREVIEW_SIZE_TABLET}
          icon={
            <Icon
              size="small"
              src="./icons/Preview-Form-icons/Pad.svg"
              alt="pad"
            />
          }
        />
        <IconButtion
          onClick={() => setPreviewSize(PREVIEW_SIZE_MOBILE)}
          active={previewSize === PREVIEW_SIZE_MOBILE}
          icon={
            <Icon
              size="small"
              src="./icons/Preview-Form-icons/Phone.svg"
              alt="phone"
            />
          }
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
