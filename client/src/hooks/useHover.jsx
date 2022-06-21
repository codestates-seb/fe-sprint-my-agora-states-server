import { useEffect, useRef, useState } from "react";

const useHover = () => {
    const [value, setValue] = useState(false);

    const ref = useRef(null);

    const handleHoverEvent = (e) => {
        e.stopPropagation();
        setValue(true);
    };

    const handleOutEvent = (e) => {
        e.stopPropagation();
        setValue(false);
    };

    useEffect(() => {
        const node = ref.current;
        if(node) {
            node.addEventListener("mouseover", handleHoverEvent);
            node.addEventListener("mouseout", handleOutEvent);

            return () => {
                node.removeEventListener("mouseover", handleHoverEvent);
                node.removeEventListener("mouseout", handleOutEvent);
            }
        }
    }, [ref.current]);
    return [ref, value];
};

export default useHover;