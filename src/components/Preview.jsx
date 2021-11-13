import "./Preview.css";

export const Preview = ({ size = "desktop", item }) => {
  return (
    <div className="preview-container">
      <div
        className={`preview-inner-container preview-inner-container-${size}`}
      >
        <div className="preview-image">
          <img src={item && item.preview} alt="thumbnail" />
        </div>
      </div>
    </div>
  );
};

export default Preview;
