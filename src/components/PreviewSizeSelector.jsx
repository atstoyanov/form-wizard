import {
  PREVIEW_SIZE_DESKTOP,
  PREVIEW_SIZE_MOBILE,
  PREVIEW_SIZE_TABLET,
} from "../constants/PreviewSizes";
import Icon from "./Icon";
import IconButtion from "./IconButton";
import "./PreviewSizeSelector.css";

export const PreviewSizeSelector = ({ previewSize, onSelect }) => {
  const handleSelect = (size) => onSelect && onSelect(size);

  return (
    <div className="preview-selector">
      <IconButtion
        onClick={() => handleSelect(PREVIEW_SIZE_DESKTOP)}
        active={previewSize === PREVIEW_SIZE_DESKTOP}
        icon={
          <Icon
            size="small"
            src="./icons/Preview-Form-icons/Desktop.svg"
            alt="desctip"
          />
        }
      />
      <IconButtion
        onClick={() => handleSelect(PREVIEW_SIZE_TABLET)}
        active={previewSize === PREVIEW_SIZE_TABLET}
        icon={
          <Icon
            size="small"
            src="./icons/Preview-Form-icons/Pad.svg"
            alt="pad"
          />
        }
      />
      <IconButtion
        onClick={() => handleSelect(PREVIEW_SIZE_MOBILE)}
        active={previewSize === PREVIEW_SIZE_MOBILE}
        icon={
          <Icon
            size="small"
            src="./icons/Preview-Form-icons/Phone.svg"
            alt="phone"
          />
        }
      />
    </div>
  );
};

export default PreviewSizeSelector;
