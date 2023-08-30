"use client";
import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(0);
  const [currenScreenHeight, setCurrentScreenHeight] = useState(0);

  useEffect(() => {
    const screenSizeHandler = () => {
      setCurrentScreenWidth(window.innerWidth);
      setCurrentScreenHeight(window.innerHeight);
    };

    screenSizeHandler(); // get initial screen size

    window.addEventListener("resize", screenSizeHandler);

    return () => window.removeEventListener("resize", screenSizeHandler);
  }, []);

  return [currentScreenWidth, currenScreenHeight];
};

export default useScreenSize;
