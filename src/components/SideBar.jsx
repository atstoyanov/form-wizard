import Icon from "./Icon";
import "./SideBar.css";
import SideBarItem from "./SideBarItem";

const SideBar = ({ menuItems, children }) => {
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
            text={item.name}
            iconSrc={item.icon}
            selected={i === 0}
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
