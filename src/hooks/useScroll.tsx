import { useEffect } from "react";

const useScroll = (
  onScroll: (scrolled: boolean) => void,
  scrollThreshold: number
) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > scrollThreshold;
      onScroll(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onScroll, scrollThreshold]);
};

export default useScroll;
