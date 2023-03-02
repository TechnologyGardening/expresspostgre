import * as React from "react";
import { Promise } from "bluebird";
Promise.config({ cancellation: true });
function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "john" });
    }, 4000);
  });
}
export default function HookUseEffect() {
  const [id, setId] = React.useState("loading...");
  const [name, setName] = React.useState("loading...");

  React.useEffect(() => {
    const promise = fetchUserData().then((user) => {
      setId(user.id);
      setName(user.name);
    });
    return () => {
      promise.cancel();
    };
  }, []);
  return (
    <>
      <p>ID : </p> <strong>{id} </strong>
      <p>Name : </p> <strong>{name} </strong>
    </>
  );
}
