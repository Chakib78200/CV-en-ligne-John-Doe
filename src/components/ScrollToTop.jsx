import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ specialPaths, specialOffset, defaultOffset }) => {
    const location = useLocation();

    useEffect(() => {
        const pathname = location.pathname;
        const isSpecialPath = specialPaths.some(path => pathname.startsWith(path));

        if (isSpecialPath) {
            window.scrollTo(0, specialOffset);
        } else {
            window.scrollTo(0, defaultOffset);
        }
    }, [location, specialPaths, specialOffset, defaultOffset]);

    return null;
};

export default ScrollToTop;