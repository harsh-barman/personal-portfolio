import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Spotlight({
  className = '',
  size = 400,
  color = 'rgba(255, 255, 255, 0.8)',
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('Spotlight component mounted!');
    
    const handleMouseMove = (e) => {
      console.log('Mouse moving:', e.clientX, e.clientY);
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      console.log('Mouse left');
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      console.log('Spotlight unmounting');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  console.log('Spotlight rendering, visible:', isVisible, 'position:', mousePos);

  return (
    <div
      className={`pointer-events-none fixed rounded-full  transition-opacity duration-300 z-[9999] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        width: size,
        height: size,
        left: mousePos.x - size / 2,
        top: mousePos.y - size / 2,
// Use the color prop dynamically
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,      }}
    >
      
    </div>
  );
}