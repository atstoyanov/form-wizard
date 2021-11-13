import "./App.css";
import menuItems from "./assets/menu.json";
import Preview from "./components/Preview";
import SideBar from "./components/SideBar";
import TopMenu from "./components/TopMenu";
import { usePreviewContext } from "./context/PreviewProvider";
import previews from "./assets/previews.json";

function App() {
  const { previewSize } = usePreviewContext();
  return (
    <div className="App">
      {/* TODO: Extract into layout component. */}
      <div className="layout">
        <div className="header">
          <TopMenu />
        </div>
        <div className="outer-content">
          <SideBar menuItems={menuItems} />
          <div className="content">
            <Preview size={previewSize} item={previews[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
