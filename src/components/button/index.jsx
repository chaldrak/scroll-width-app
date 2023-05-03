import React, { useEffect, useState } from "react";
import { GrSun } from "react-icons/gr";
import { FiMoon } from "react-icons/fi";
import { getSavedThemeConfig } from "../../utils";

const Button = () => {
  const themeConfig = getSavedThemeConfig();
  const [mode, setMode] = useState(themeConfig);

  const toggleThemeMode = () => {
    if (mode.dark) {
      setMode({ dark: false });
      localStorage.setItem("mode", JSON.stringify({ dark: false }));
    } else {
      setMode({ dark: true });
      localStorage.setItem("mode", JSON.stringify({ dark: true }));
    }
  };

  mode.dark
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");

  return (
    <div
      className="fixed bottom-10 right-10 w-12 h-12 shadow-[0_0_10px_black] flex items-center justify-center rounded-full cursor-pointer z-20 dark:bg-dark dark:shadow-[0_0_10px_white] text-white"
      onClick={toggleThemeMode}
    >
      {mode.dark ? <FiMoon size={25} /> : <GrSun size={25} />}
    </div>
  );
};

export default Button;
