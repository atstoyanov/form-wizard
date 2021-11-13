import "./Icon.css";

const Icon = ({ src, size, alt, className, ...rest }) => {
  const newClassName = [
    className,
    size === "small" ? "icon-small" : "icon",
  ].filter((x) => !!x);

  return (
    <img src={src} alt={alt} {...rest} className={newClassName.join(" ")} />
  );
};

export default Icon;
