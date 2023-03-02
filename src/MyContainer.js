import * as React from "react";
import MyCustomList from "./MyCustomList";
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["First", "Second", "Third", "Fourth"]);
    }, 3000);
  });}
class MyContainerComp extends React.Component {
  state = { items: [] };
  componentDidMount() {
    fetchData().then((items) => this.setState({ items }));
  }
  render() {
    return <MyCustomList {...this.state} />;
  }}
export default MyContainerComp;
