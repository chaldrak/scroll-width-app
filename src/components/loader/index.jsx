import React, { useEffect, useRef, useState } from "react";

const Loader = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const loaderWidth = () => {
      const { clientHeight, scrollHeight, scrollTop } =
        document.documentElement;
      const scrolledWidth = (scrollTop * 100) / (scrollHeight - clientHeight);
      setWidth(scrolledWidth);
    };

    window.addEventListener("scroll", loaderWidth);

    return () => {
      window.removeEventListener("scroll", loaderWidth);
    };
  });
  return (
    <div
      className="h-[6px] bg-blue-600 fixed transition-all z-10"
      style={{ width: `${width}%` }}
    />
  );
};

export default Loader;
