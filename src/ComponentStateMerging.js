import * as React from "react";
class StateMerge extends React.Component {
  state = {
    first: "loading...",
    second: "loading...",
    third: "loading...",
    fourth: "loading...",
    last: "all messages are loaded",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({ first: "done" });
    }, 1000);
    setTimeout(() => {
      this.setState({ second: "done" });
    }, 2000);
    setTimeout(() => {
      this.setState({ third: "done" });
    }, 3000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        fourth: state.last,
      }));
    }, 4000);
  }
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.state)
            .filter((keys) => keys !== "last")
            .map((keys) => (
              <li key={keys}>
                <strong>{keys} :</strong>
                {this.state[keys]}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
export default StateMerge;
