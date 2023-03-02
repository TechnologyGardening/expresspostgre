import React from "react";
import ReactDOM from "react-dom/client";
import HookComp1 from "./HookComp1";
const root = ReactDOM.createRoot(document.getElementById("root"));

function render() {
  root.render(<HookComp1 />);
}
render();
