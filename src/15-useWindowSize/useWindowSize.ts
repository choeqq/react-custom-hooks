import { useState } from "react";
import useEventListener from "../13-useEventListener/useEventListener";

interface IWindowSize {
  width: number;
  height: number;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  });

  return windowSize;
}
