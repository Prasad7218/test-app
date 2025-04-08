import React, { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getSnapshot() {
  return window.innerWidth;
}

export default function ExternalStore() {
  const width = useSyncExternalStore(subscribe, getSnapshot);

  return <h1>Window Width: {width}px</h1>;
}
