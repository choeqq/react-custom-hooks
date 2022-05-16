import React, { RefObject, useState } from "react";
import useEventListener from "../13-useEventListener/useEventListener";

export default function useHover<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>
): boolean {
  const [hovered, setHovered] = useState<boolean>(false);

  useEventListener("mouseover", () => setHovered(true), ref?.current as any);
  useEventListener("mouseout", () => setHovered(false), ref?.current as any);

  return hovered;
}
