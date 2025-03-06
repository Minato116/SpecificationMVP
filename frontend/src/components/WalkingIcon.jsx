import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure that Bootstrap is imported

const WalkingIcon = () => {
  const [scrollPos, setScrollPos] = useState(window.scrollY);
  const [iconPos, setIconPos] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const newDirection = currentScrollPos > scrollPos ? 'right' : 'left';

      setDirection(newDirection);
      setScrollPos(currentScrollPos);

      setIconPos(prevPos => {
        const step = 15; // Pixels to move per scroll event
        let newPos;

        if (newDirection === 'right') {
          newPos = prevPos + step;

          // Boundary checking
          return Math.min(newPos, window.innerWidth - 40); // 40 is approx icon width
        } else {
          newPos = prevPos - step;

          // Boundary checking
          return Math.max(newPos, 0);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return (
    <div className="walking-container">
      <i
        className={`walking-icon fas fa-walking text-primary fw-bolder ${direction === 'left' ? 'flip-horizontal' : ''}`}
        style={{ left: `${iconPos}px`, fontSize:"150px" }}
      />
    </div>
  );
};

export default WalkingIcon;
