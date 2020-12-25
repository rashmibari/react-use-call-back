import React from "react";

const Title = () => {
  console.log("Title Component Rendering");
  return <h2>Static Title Component</h2>;
};

export default React.memo(Title);
