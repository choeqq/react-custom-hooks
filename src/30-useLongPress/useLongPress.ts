import { RefObject } from "react";
import useEventListener from "../13-useEventListener/useEventListener";
import useTimeout from "../2-useTimeout/useTimeout";
import useEffectOnce from "../20-useEffectOnce/useEffectOnce";

export default function useLongPress<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  cb: Function,
  { delay = 250 } = {}
) {
  const { reset, clear } = useTimeout(cb, delay);
  useEffectOnce(clear);

  useEventListener("mousedown", reset, ref.current as any);
  useEventListener("touchstart", reset, ref.current as any);

  useEventListener("mouseup", reset, ref.current as any);
  useEventListener("mouseleave", reset, ref.current as any);
  useEventListener("touchend", reset, ref.current as any);
}
