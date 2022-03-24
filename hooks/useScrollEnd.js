import { useEffect, useRef } from "react";

const useScrollEnd = (ref) => {
  let isScrollEnd = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;

      if (ref.current) {
        if (scrollTop + clientHeight === scrollHeight) {
          isScrollEnd.current = true;
        } else {
          isScrollEnd.current = false;
        }
      }
    };

    ref.current.addEventListener("scroll", handleScroll);

    return () => {
      ref.current.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isScrollEnd.current;
};

export default useScrollEnd;
