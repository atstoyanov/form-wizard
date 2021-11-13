import "./Icon.css";

const Icon = ({ src, size, alt, className, ...rest }) => {
  const newClassName = `${className} ${
    size === "small" ? "icon-small" : "icon"
  }`;

  return <img src={src} alt={alt} {...rest} className={newClassName} />;
};

export default Icon;
