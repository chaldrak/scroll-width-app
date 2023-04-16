import React, { useEffect, useState } from "react";
import { GrSun, GrMoon } from "react-icons/gr";
import { FiMoon } from "react-icons/fi";

const Button = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode((prev) => !prev);
  };
  useEffect(() => {}, []);
  return (
    <div
      className="fixed bottom-10 right-10 w-12 h-12 shadow-[0_0_10px_black] flex items-center justify-center rounded-full cursor-pointer dark:shadow-[0_0_10px_white] text-white"
      onClick={handleDarkMode}
    >
      {darkMode ? <FiMoon size={25} /> : <GrSun size={25} />}
    </div>
  );
};

export default Button;
