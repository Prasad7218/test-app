import React, { useState, useDeferredValue } from "react";

const SlowList = ({ text }) => {
  // Simulate heavy work by creating a big list
  const items = Array.from({ length: 5000 }, (_, i) => i);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          {text} - Item {item}
        </li>
      ))}
    </ul>
  );
};

export default function Deferred() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div>
      <h2>useDeferredValue Demo</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type slowly..."
      />

      {/* This is slow to render */}
      <SlowList text={deferredText} />
    </div>
  );
}
