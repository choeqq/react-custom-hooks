import { useRef } from "react";

export default function usePrevious<T>(value: T) {
  const currRef = useRef<T>(value);
  const previousRef = useRef<T>();

  if (currRef.current !== value) {
    previousRef.current = currRef.current;
    currRef.current = value;
  }

  return previousRef.current;
}
