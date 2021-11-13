import "./Preview.css";

export const Preview = ({ size = "desktop", item }) => {
  return <div className={`preview-container preview-container-${size}`}></div>;
};

export default Preview;
