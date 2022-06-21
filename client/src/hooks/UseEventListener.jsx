import { useEffect, useRef } from "react";

const UseEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const isSupported = element && element.addEventListener;
        if(!isSupported) {
            return;
        }

        const eventListener = (e) => savedHandler.current(e);
        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
};

export {UseEventListener};