import * as React from "react";
class MyComponent extends React.Component {
  state = {
    heading: "React lecture",
    content: "This is the first session of react for MCA",
    first: true,
    second: false,
  };
  render() {
    const { heading, content, first, second } = this.state;
    return (
      <div>
        <p>
          Heading is <b>{heading}</b>
        </p>
        <p>
          Content is <b>{content}</b>{" "}
        </p>
        <button disabled={first}>First Button</button>
        <button disabled={second}>Second Button</button>
      </div>
    );
  }
}
export default MyComponent;
