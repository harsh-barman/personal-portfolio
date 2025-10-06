import React, { useState, useEffect } from 'react';
import image1 from '../../../assets/project1.jpg'
import image2 from '../../../assets/project2.jpg'
import image3 from '../../../assets/project3.jpg'
import image4 from '../../../assets/image4.jpeg'


const ScrollCardStack = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Track cursor position globally
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sample card data
  const cardData = [
    {
      id: 1,
      title: "First Card",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
      image: image1,
      link: "https://parallax-scroll-website-lemon.vercel.app/"
    },
    {
      id: 2,
      title: "Second Card",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
      image: image2,
      link: "https://e-commerce-search-and-filtering-system-with-react.vercel.app/"
    },
    {
      id: 3,
      title: "Third Card",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
      image: image3,
      link: "https://shop-cart-three-kappa.vercel.app/"
    },
    {
      id: 4,
      title: "Fourth Card", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
      image: image4,
      link: "https://cerope.com/"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        <div 
          className="bg-[#455CE9] rounded-full flex items-center justify-center shadow-2xl"
          style={{
            width: isHovering ? '120px' : '0px',
            height: isHovering ? '120px' : '0px',
            opacity: isHovering ? 1 : 0,
            transform: `scale(${isHovering ? 1 : 0})`,
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <svg 
            className="text-white" 
            width="46" 
            height="46" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            style={{
              transform: 'rotate(85deg)',
              transition: 'transform 0.3s ease'
            }}
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
      
      {/* Top spacer */}
      <div style={{ height: '18vh' }} />
      
      {/* Cards container */}
      <div className="w-full md:max-w-7xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className="sticky mb-4"
            style={{ 
              top: `${200 + (index * 20)}px`,
              zIndex: index + 1
            }}
          >
            <div className="relative">
              {index === 0 && (
                <div className="absolute  top-50" style={{ transform: 'translateX(-100%)' }}>
                  <div 
                    className="text-gray-800 font-bold tracking-widest pr-8"
                    style={{
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transform: 'rotate(180deg)',
                      fontSize: '14px',
                      letterSpacing: '0.2em'
                    }}
                  >
                    RECENT WORK
                  </div>
                </div>
              )}
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl flex overflow-hidden shadow-2xl mx-4 mb-10 md:h-[600px] relative "
                style={{ cursor: 'none' }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setHoveredCard(card.id);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setHoveredCard(null);
                }}
              >
                <div className="w-full flex-shrink-0 flex overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={card.image}
                    alt={card.title}
                    style={{
                      transform: hoveredCard === card.id ? 'scale(1.1)' : 'scale(1)',
                      transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom spacer */}
      <div className='h-[25vh] ' />
      
      <style jsx>{`
        @media (max-width: 768px) {
          .sticky > a {
            flex-direction: column;
          }
          .sticky > a > div:first-child {
            width: 100%;
          }
          .sticky img {
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollCardStack;