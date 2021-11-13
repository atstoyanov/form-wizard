import "./IconButton.css";

export const IconButtion = ({ icon, children, disabled }) => {
  let classes = ["icon-button"];
  if (disabled) classes.push("icon-button-disabled");

  return (
    <button className={classes.join(" ")}>
      {icon ? icon : null}
      <div>{children}</div>
    </button>
  );
};
export default IconButtion;
