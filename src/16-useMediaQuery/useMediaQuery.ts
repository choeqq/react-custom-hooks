import React, { useState, useEffect } from "react";
import useEventListener from "../13-useEventListener/useEventListener";

export default function useMediaQuery(mediaQuery: string) {
    const [isMatch, setIsMatch] = useState<boolean>(false);
    const [mediaQueryList, setMediaQueryList] = useState(null);

    useEffect(() => {
        const list: MediaQueryList | null = window.matchMedia(mediaQuery);
        setMediaQueryList(list);
        setIsMatch(list.matches);
    }, [mediaQuery]);

    useEventListener("change", e:  => setIsMatch(e.matches), mediaQueryList);

    return isMatch;
}