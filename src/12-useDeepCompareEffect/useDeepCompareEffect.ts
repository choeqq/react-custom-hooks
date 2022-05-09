import { useEffect, useRef } from "react";
import isEqual from "lodash/fp/isEqual";

export default function useDeepCompareEffect<T>(callback: Function, deps: T[]) {
  const currentDepsRef = useRef<T[]>();

  if (isEqual(currentDepsRef.current, deps)) {
    currentDepsRef.current = deps;
  }

  useEffect(callback, currentDepsRef.current);
}
