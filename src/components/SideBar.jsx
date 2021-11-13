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
          // <li
          //   key={i}
          //   className={`side-bar-item ${
          //     i === 0 ? "side-bar-item-selected" : ""
          //   }`}
          // >
          //   <Icon
          //     src={item.icon}
          //     className="side-bar-item-icon icon"
          //     alt="icon"
          //     width={"24px"}
          //     height={"24px"}
          //   />
          //   {item.name}
          // </li>
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
