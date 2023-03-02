import * as React from "react";
class StateChange extends React.Component {
  state = {
    heading: "This is heading",
    content: "This is content",
    first: true,
    second: false,
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        heading: "this is the new heading",
        content: "this is the new content",
        first: false,
        second: true,
      });
    }, 3000);
  }
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
export default StateChange;
