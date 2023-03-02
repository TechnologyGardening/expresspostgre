import * as Reaact from "react";
class Exercise1 extends Reaact.Component {
  state = {
    first: "loading....",
    second: "loading....",
    third: "loading....",
    fourth: "loading....",
    fifth: "loading....",
    complete: "not over yet....",
    a: "20%",
    b: "40%",
    c: "60%",
    d: "80%",
    e: "100%",
    f: "finished",
  };
  // arr2 = ['a','b','c','d','d','f'];
  constructor() {
    super();
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        first: state.a,
      }));
    }, 3000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        second: state.b,
      }));
    }, 6000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        third: state.c,
      }));
    }, 9000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        fourth: state.d,
      }));
    }, 12000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        fifth: state.e,
      }));
    }, 15000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        complete: state.f,
      }));
    }, 18000);
  }
  render() {
    var arr2 = ["a", "b", "c", "d", "e", "f"];
    return (
      <div>
        <ul>
          {Object.keys(this.state)
            .filter((key) => !arr2.includes(key))
            .map((i) => (
              <li key={i}>
                <strong>{i}</strong>: {this.state[i]}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
export default Exercise1;
