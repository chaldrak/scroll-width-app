import React, { useRef, useState } from "react";

const Loader = () => {
  const [width, setWidth] = useState(0);
  window.addEventListener("scroll", () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
    const scrolledWidth = (scrollTop * 100) / (scrollHeight - clientHeight);
    setWidth(scrolledWidth);
  });
  return (
    <div
      className="h-2 bg-indigo-600 fixed transition-all"
      style={{ width: `${width}%` }}
    />
  );
};

export default Loader;
