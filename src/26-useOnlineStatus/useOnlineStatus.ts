import { useState } from "react";
import useEventListener from "../13-useEventListener/useEventListener";

export default function useOnlineState(): boolean {
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEventListener("online", () => setOnline(navigator.onLine));
  useEventListener("offline", () => setOnline(navigator.onLine));

  return online;
}
