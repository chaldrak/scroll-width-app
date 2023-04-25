import React, { useEffect, useState } from "react";
import LeftSide from "../../components/left-side";
import RightSide from "../../components/right-side";
import ReactGA from "react-ga4";

const HomePage = () => {
  const [menu, setMenu] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <main className="w-full relative flex text-center lg:px-20 px-10 py-4">
      <LeftSide setMenu={setMenu} setActiveIndex={setActiveIndex} />
      <RightSide menu={menu} activeIndex={activeIndex} />
    </main>
  );
};

export default HomePage;
