import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<Array<{ x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add current position to trail
      trailRef.current = [
        ...trailRef.current.slice(-9), // Keep last 9 positions
        { x: e.clientX, y: e.clientY, opacity: 1 }
      ];
    };

    window.addEventListener('mousemove', updatePosition);

    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      'button, a, input, textarea, [role="button"], [tabindex]:not([tabindex="-1"])'
    );

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    elements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor trail */}
      <div className="pointer-events-none">
        {trailRef.current.map((point, index) => (
          <motion.div
            key={index}
            style={{
              position: 'fixed',
              left: point.x,
              top: point.y,
              width: 8 - index,
              height: 8 - index,
              borderRadius: '50%',
              backgroundColor: `rgba(0, 255, 255, ${point.opacity * 0.3})`,
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
              zIndex: 9998,
              opacity: point.opacity * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main cursor */}
      <motion.div
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: isHovering ? 16 : 10,
          height: isHovering ? 16 : 10,
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 255, 255, 0.7)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      >
        {/* Inner glow effect */}
        {!isHovering && (
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 20,
              height: 20,
              borderRadius: '50%',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
              zIndex: 10000,
            }}
          />
        )}

        {/* Pulse effect when hovering */}
        {isHovering && (
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 255, 255, 0.2)',
              pointerEvents: 'none',
              animate: { scale: [1, 1.5, 1] },
              transition: { duration: 1.5, repeat: Infinity },
            }}
          />
        )}
      </motion.div>
    </>
  );
};

export default Cursor;