import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const RightSide = ({ menu, activeIndex }) => {
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;
    const header = document.getElementById(hash.substring(1));

    header && scrollToTarget(header, 70);

    function scrollToTarget(element, offset) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [location]);
  return (
    <div className="hidden sticky top-20 mt-40 lg:flex flex-col h-fit w-[25%]">
      <p className="text-left mb-5">From this article</p>
      <div className="w-full h-full border-l border-gray-500 text-left pl-3">
        <ul className="space-y-3">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`${
                index === activeIndex &&
                "pl-3 relative text-blue-600 font-bold transition-all"
              }`}
            >
              <NavLink
                to={`#${item.id}`}
                className={`${index !== activeIndex && "hover:text-gray-500"}`}
              >
                <span>{item.title}</span>
                <div
                  className={`${
                    index === activeIndex &&
                    "absolute top-0 z-10 -left-[13px] h-full w-full border-l-2 border-blue-600"
                  }`}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
