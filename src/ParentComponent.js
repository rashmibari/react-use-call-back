import React, { useState, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
import Count from "./Count";

const ParentComponent = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(2000);

  const onAgeIncrement = useCallback(() => {
    setAge(age * 2);
  }, [age]);

  const onSalaryIncrement = useCallback(() => {
    setSalary(salary * 10);
  }, [salary]);

  return (
    <React.Fragment>
      <Title />
      <Count count={age} title="Age" />
      <Button handleClick={onAgeIncrement}>Age Increment</Button>
      <Count count={salary} title="Salary" />
      <Button handleClick={onSalaryIncrement}>Salary Increment</Button>
    </React.Fragment>
  );
};

export default ParentComponent;
