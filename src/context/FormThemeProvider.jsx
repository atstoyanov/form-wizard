import { createContext, useCallback, useContext, useState } from "react";
import themes from "../assets/previews.json";

const FormThemeContext = createContext({
  themes: [],
  setActiveTheme: () => {
    throw new Error("Form Theme context not provided!");
  },
});

const FormThemeProvider = ({ children }) => {
  const [activeTheme, setActiveThemeInternal] = useState();
  const setActiveTheme = useCallback(
    (id) => {
      setActiveThemeInternal(themes.find((t) => t.id === id));
    },
    [setActiveThemeInternal]
  );

  return (
    <FormThemeContext.Provider
      value={{
        themes,
        activeTheme,
        setActiveTheme,
      }}
    >
      {children}
    </FormThemeContext.Provider>
  );
};

const useFormThemeContext = () => {
  const context = useContext(FormThemeContext);
  return context;
};

export { FormThemeProvider, useFormThemeContext };
