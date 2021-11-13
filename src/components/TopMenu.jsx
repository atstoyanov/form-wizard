import Icon from "./Icon";
import "./TopMenu.css";

const TopMenu = () => {
  return (
    <div className="top-menu">
      <div className="logo-wrapper">
        <img src="./icons/SMSBump-Logo.svg" alt="logo" />
      </div>
      <div className="middle">
        <div className="form-name">
          <Icon
            src="./icons/Top-Menu-Icons/Pen-icon.svg"
            size="small"
            alt="pen"
          />

          <span style={{ fontSize: "15px" }}>Form 1</span>
        </div>
        <div className="status">Draft</div>
      </div>
      <div className="right-menu">
        <img
          src="./icons/Top-Menu-Icons/Exit-icon.svg"
          className="icon-small"
          alt="pen"
        />
        Exit
      </div>
    </div>
  );
};

export default TopMenu;
