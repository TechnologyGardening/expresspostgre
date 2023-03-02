import * as React from "react";
function MyCustomButton({ disabled, text }) {
  return <button disabled={disabled}>{text}</button>;
}
MyCustomButton.defaultProps = {
  text: "Default Text",
  disabled: true,
};
export default MyCustomButton;
