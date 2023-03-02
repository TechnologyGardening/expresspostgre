// States are mutable,   change->rerender
// Props are immutable   change->reload
import * as React from "react";
class MyButton extends React.Component {
  render() {
    const { disable, text } = this.props;
    return <button disabled={disable}>{text}</button>;
  }
}
export default MyButton;
