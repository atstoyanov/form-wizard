import "./App.css";
import menuItems from "./assets/menu.json";
import Preview from "./components/Preview";
import SideBar from "./components/SideBar";
import TopMenu from "./components/TopMenu";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <div className="header">
          <TopMenu />
        </div>
        <div className="outer-content">
          <SideBar menuItems={menuItems} />
          <div className="content">
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
