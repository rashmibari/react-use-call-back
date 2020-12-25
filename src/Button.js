import React from "react";

const Button = props => {
  console.log("Button Component Rendering");
  const { handleClick, children } = props;
  return <button onClick={handleClick}>{children}</button>;
};

export default React.memo(Button);
