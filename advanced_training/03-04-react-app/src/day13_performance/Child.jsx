import React, { useState } from "react";

// React.memo is a higher order component that memoizes the component,
// prevents unnecessary re-renders when the state and props didn't change
// The second argument is a custom comparison function that takes the previous props and the current props

function ChildFn({ count }) {
  const [bool, toggle] = useState(true);
  const forceUpdate = () => {
    toggle((prev) => !prev);
  };
  console.log("Child re-rendered");
  return (
    <div>
      <h2>Child: {count}</h2>
      <button onClick={forceUpdate}>Rerender Child</button>
    </div>
  );
}

// PurComponent prevents class component from re-rendering when the props and state didn't change
// PureComponent has a built-in shouldComponentUpdate method
// It does a shallow comparison of the props and state

class ChildClass extends React.PureComponent {
  state = {
    bool: true,
  };

  forceUpdate = () => {
    this.setState((prev) => ({ bool: !prev.bool }));
  };
  render() {
    console.log("Child re-rendered");
    return (
      <div>
        <h2>Child: {this.props.count}</h2>
        <button onClick={this.forceUpdate}>Rerender Child</button>
      </div>
    );
  }
}

export default React.memo(ChildFn);
// export default React.memo(ChildClass);
// export default ChildClass;
