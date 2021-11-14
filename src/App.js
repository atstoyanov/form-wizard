import "./App.css";
import menuItems from "./assets/menu.json";
import { Layout } from "./components/Layout";
import Preview from "./components/Preview";
import SideBar from "./components/SideBar";
import TopMenu from "./components/TopMenu";
import { useFormThemeContext } from "./context/FormThemeProvider";
import { usePreviewContext } from "./context/PreviewProvider";

function App() {
  const { previewSize } = usePreviewContext();
  const { activeTheme } = useFormThemeContext();

  return (
    <div className="App">
      <Layout
        header={<TopMenu />}
        content={
          <>
            <SideBar menuItems={menuItems} />
            <Preview size={previewSize} item={activeTheme} />
          </>
        }
      />
    </div>
  );
}

export default App;
