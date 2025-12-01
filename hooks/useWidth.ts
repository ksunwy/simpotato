import { useState, useEffect } from "react";

const useWidth = () => {
    const [isMobile, setIsMobile] = useState(false);
      const [isClientReady, setIsClientReady] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        setIsClientReady(true);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        isMobile,
        isClientReady,
        setIsMobile
    }
}

export default useWidth
