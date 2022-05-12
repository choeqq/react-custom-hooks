import { useEffect } from "react";

export default function useEffectOnce(cb: Function) {
  useEffect(cb, []);
}
