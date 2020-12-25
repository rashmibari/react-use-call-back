import React from "react";

const Count = props => {
  console.log("Count Component Rendering");
  const { count, title } = props;
  return (
    <h2>
      {title}: {count}
    </h2>
  );
};

export default React.memo(Count);
