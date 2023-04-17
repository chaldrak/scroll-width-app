import React, { useEffect, useState } from "react";
import { GrSun } from "react-icons/gr";
import { FiMoon } from "react-icons/fi";

const Button = () => {
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("mode")) || { dark: false }
  );
  const handleDarkMode = () => {
    setMode({ dark: !mode.dark });
  };
  mode.dark
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);
  return (
    <div
      className="fixed bottom-10 right-10 w-12 h-12 shadow-[0_0_10px_black] flex items-center justify-center rounded-full cursor-pointer dark:shadow-[0_0_10px_white] text-white"
      onClick={handleDarkMode}
    >
      {mode.dark ? <FiMoon size={25} /> : <GrSun size={25} />}
    </div>
  );
};

export default Button;
