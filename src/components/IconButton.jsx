import { useCallback } from "react";
import "./IconButton.css";

export const IconButtion = ({ icon, children, disabled, onClick, active }) => {
  let classes = ["icon-button"];
  if (disabled) classes.push("icon-button-disabled");
  else if (active) classes.push("icon-button-active");

  const handleClick = useCallback(() => {
    if (!onClick || disabled) return;
    onClick();
  }, [onClick, disabled]);

  return (
    <button className={classes.join(" ")} onClick={handleClick}>
      {icon ? icon : null}
      {children && <div>{children}</div>}
    </button>
  );
};
export default IconButtion;
