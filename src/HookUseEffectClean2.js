import * as React from "react";
import HookUseEffect from "./HookUseEffectClean";
const ShowHideUser = ({ show }) => (show ? <HookUseEffect /> : null);
export default function HookUseEffectClean2() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide User" : "Show User"}
      </button>
      <ShowHideUser show={show} />
    </>
  );
}
