/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const scrollContext = createContext();

export function ScrollProvider({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <scrollContext.Provider value={scrollPosition}>
      {children}
    </scrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(scrollContext);
}
