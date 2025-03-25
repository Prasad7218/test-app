import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }) => {
  console.log("Button component re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

const Callback = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button handleClick={increment} />
    </div>
  );
};

export default Callback;
