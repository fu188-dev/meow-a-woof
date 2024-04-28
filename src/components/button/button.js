import "./button.scss";

function Button({ children, onclick }) {
  return <button onClick={onclick}>{children}</button>;
}
export default Button;
