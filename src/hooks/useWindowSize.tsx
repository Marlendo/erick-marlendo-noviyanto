import { useLayoutEffect, useState } from "react";
import useDebounce from "#/hooks/useDebounce";

function useWindowSize() {
  const [size, setSize] = useState<{ WIDTH: number; HEIGHT: number }>({
    WIDTH: 1200,
    HEIGHT: 1200,
  });

  const sizeDebounce: { WIDTH: number; HEIGHT: number } = useDebounce(
    size,
    500
  );

  useLayoutEffect(() => {
    function updateSize() {
      setSize({ WIDTH: window.innerWidth, HEIGHT: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return sizeDebounce;
}

export default useWindowSize;
