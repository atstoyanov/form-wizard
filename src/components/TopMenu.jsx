import Icon from "./Icon";
import Button from "./Button";
import "./TopMenu.css";
import IconButtion from "./IconButton";

const TopMenu = () => {
  return (
    <div className="top-menu-wrapper">
      <div className="top-menu row1">
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

            <span>Form 1</span>
          </div>
          <div className="status">Draft</div>
        </div>
        <div className="right-menu">
          <IconButtion
            icon={
              <Icon
                size="small"
                src="./icons/Top-Menu-Icons/Exit-icon.svg"
                alt="exit"
              />
            }
          >
            Exit
          </IconButtion>
        </div>
      </div>
      <div className="top-menu row2">
        <div className="left">
          <div className="tab-item selected">1.Design</div>
          <div className="tab-item">2.Behavior</div>
        </div>
        <div className="middle">
          <div></div>
          <div>
            <Button>Form 1</Button>
            <Button variant="outlined">Success</Button>
          </div>
          <div className="d-flex">
            <IconButtion
              icon={
                <Icon
                  size="small"
                  src="./icons/Top-Menu-Icons/Undo-icon.svg"
                  alt="exit"
                />
              }
            >
              Undo
            </IconButtion>
            <IconButtion
              icon={
                <Icon
                  size="small"
                  src="./icons/Top-Menu-Icons/Redo-icon.svg"
                  alt="exit"
                />
              }
              disabled
            >
              Redo
            </IconButtion>
          </div>
        </div>
        <div className="right-menu">
          <IconButtion
            icon={
              <Icon
                size="small"
                src="./icons/Top-Menu-Icons/trash-icon.svg"
                alt="exit"
              />
            }
          >
            Delete
          </IconButtion>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
