import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollUp;
};

export default useScrollDirection;
