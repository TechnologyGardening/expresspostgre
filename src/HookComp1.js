// class -> render,return code reusability
// functional component -> function, reusability, return
// functional component --> state
// hooks -> use
import { useState } from "react";
// useState, useEffect, useReducer, useMemo, useRef, useContext
function HookComp1() {
  const [variable_name, method_name] = useState("initial value");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <p>{age}</p>
      <input onChange={(e) => setName(e.target.value)} />
    </>
  );
}
export default HookComp1;
