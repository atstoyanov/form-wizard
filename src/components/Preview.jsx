import "./Preview.css";

export const Preview = ({ size = "desktop", item }) => {
  const preview = item ? (
    <img src={item && item.preview} alt="thumbnail" />
  ) : (
    <span>No form selected!</span>
  );
  return (
    <div className="preview-container">
      <div
        className={`preview-inner-container preview-inner-container-${size}`}
      >
        <div className="preview-image">{preview}</div>
      </div>
    </div>
  );
};

export default Preview;
