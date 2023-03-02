import * as React from "react";
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
  const [enroll, setEnroll] = React.useState("");
  const [enroll1, setEnroll1] = React.useState("");
  const [enroll2, setEnroll2] = React.useState("");

  React.useEffect(() => {
    fetchUserData().then((user) => {
      setId(user.id);
      setName(user.name);
    });
  }, []);
  return (
    <>
      <p>ID : </p> <strong>{id} </strong>
      <p>Name : </p> <strong>{name} </strong>
      <input value={enroll} onChange={(e) => setEnroll(e.target.value)} />
      <p>{enroll}</p>
    </>
  );
}
