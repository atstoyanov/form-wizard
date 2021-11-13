import "./Button.css";

export const Button = ({ children, variant = "standard" }) => {
  let classes = ["button", `button-${variant}`];

  return <button className={classes.join(" ")}>{children}</button>;
};
export default Button;
