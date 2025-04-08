import React, { useState, useTransition } from "react";

function Transition() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const data = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Mark the heavy operation as non-urgent
    startTransition(() => {
      const filtered = data.filter((item) => item.includes(value));
      setList(filtered);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search items..."
      />

      {isPending && <p>Loading...</p>}

      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Transition;
