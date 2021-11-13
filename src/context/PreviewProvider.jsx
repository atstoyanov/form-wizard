import { createContext, useCallback, useContext, useState } from "react";
import { PREVIEW_SIZE_DESKTOP } from "../constants/PreviewSizes";

const DEFAULT_PREVIEW_SIZE = PREVIEW_SIZE_DESKTOP;

const PreviewContext = createContext({
  previewSize: DEFAULT_PREVIEW_SIZE,
  setPreviewSize: () => undefined,
});

const PreviewProvider = ({ children }) => {
  const [previewSize, setPreviewSizeInternal] = useState(DEFAULT_PREVIEW_SIZE);
  const setPreviewSize = useCallback(
    (size) => {
      // TODO: Validate allowed sizes
      console.log(size);
      setPreviewSizeInternal(size);
    },
    [setPreviewSizeInternal]
  );

  return (
    <PreviewContext.Provider
      value={{
        setPreviewSize,
        previewSize,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

const usePreviewContext = () => {
  const context = useContext(PreviewContext);
  return context;
};

export { PreviewProvider, usePreviewContext };
