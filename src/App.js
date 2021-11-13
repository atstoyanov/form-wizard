import "./App.css";
import SideBar from "./components/SideBar";
import TopMenu from "./components/TopMenu";

const menuItems = [
  { name: "Theme", icon: "./icons/Main-Icons/Theme.svg" },
  { name: "Form", icon: "./icons/Main-Icons/Form.svg" },
  { name: "Text", icon: "./icons/Main-Icons/Text new.svg" },
  { name: "Phone Field", icon: "./icons/Main-Icons/Phone Field.svg" },
  { name: "Email Field", icon: "./icons/Main-Icons/Email Field.svg" },
  { name: "Name Field", icon: "./icons/Main-Icons/Component 74 – 713.svg" },
  { name: "Button Field", icon: "./icons/Main-Icons/Button Field.svg" },
  { name: "Checkbox", icon: "./icons/Main-Icons/Checkbox.svg" },
  { name: "Close Button", icon: "./icons/Main-Icons/Close Button.svg" },
  { name: "Compliance", icon: "./icons/Main-Icons/Compliance.svg" },
];

function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="header">
          <TopMenu />
        </div>
        <div className="outer-content">
          <SideBar menuItems={menuItems} />
          <div className="content">Content</div>
        </div>
      </div>
    </div>
  );
}

export default App;
