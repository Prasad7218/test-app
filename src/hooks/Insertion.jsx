import React, { useInsertionEffect } from "react";

export default function Insertion() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .injected-style {
        color: red;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div className="injected-style">Hello world</div>;
}
