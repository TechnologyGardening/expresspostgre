import * as React from "react";
export default ({ items }) => {
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};
