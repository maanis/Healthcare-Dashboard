import { useEffect, useState } from "react";

const useIsMobile = (maxWidth = 1100) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

        const handleChange = () => setIsMobile(mediaQuery.matches);
        handleChange();

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [maxWidth]);

    return isMobile;
};

export default useIsMobile;
