import React, { useState, useEffect } from "react";
import image1 from '../../../assets/project1.jpg'
import image2 from '../../../assets/project2.jpg'
import image3 from '../../../assets/project3.jpg'
import image4 from '../../../assets/image4.jpeg'


export default function Projects() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Track cursor position globally
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
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
            className="rounded-full flex items-center justify-center shadow-2xl"
            style={{
              backgroundColor: '#455CE9',
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

        <div className="w-full h-screen flex flex-col justify-center items-center px-4 tracking-widest">
            <h1 className="w-full font-black text-[clamp(14px,10vw,68px)] text-[#000] pb-[2rem] text-center"
                style={{
                fontFamily: '"Boldonse", system-ui',
                transform: 'scaleX(0.7) scaleY(2)'}}
            >
                RECENT PROJECTS
            </h1>
            <span className="w-full text-[clamp(2px,5vw,28px)] pt-[2rem]  md:max-w-xl text-center text-[#000] font-black px-4"
            style={{ fontFamily: '"Italiana", sans-serif' }}>
                Check out some of the most recent projects I've had the
                    pleasure of working on.</span>

        </div >
        {/* grid section */}
        <div className="w-full md:max-w-6xl mx-auto px-4 md:px-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                
                <div className="col-span-1 md:col-span-7">
                    <a 
                        href="https://parallax-scroll-website-lemon.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className=" bg-blue-100 h-[350px] md:h-[450px] flex items-start rounded-2xl overflow-hidden shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
                        style={{ cursor: 'none' }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <img 
                            src={image1}
                            alt="icon" 
                            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                        />
                    </a>
                    <span className="flex flex-col text-xl md:text-2xl font-black mt-4 md:mt-6"
                        style={{
                        fontFamily: '"Italiana", sans-serif'}}>
                        BlackBird Clothing
                        <span className="flex text-base md:text-lg mt-2"
                            style={{
                            fontFamily: '"Italiana", sans-serif'}}>
                            A landing page BlackBird Clothing showing parallax effect
                        </span>
                    </span>
                </div>
                
                
                <div className="col-span-1 md:col-span-5">
                    <a 
                        href="https://e-commerce-search-and-filtering-system-with-react.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block bg-blue-100 rounded-2xl h-[350px] overflow-hidden shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
                        style={{ cursor: 'none' }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <img 
                            src={image2}
                            alt="icon" 
                            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                        />
                    </a>
                    <span className="flex flex-col text-xl md:text-2xl font-black mt-4 md:mt-6"
                        style={{
                        fontFamily: '"Italiana", sans-serif'}}>
                        Shoe Store
                        <span className="flex text-base md:text-lg mt-2"
                            style={{
                            fontFamily: '"Italiana", sans-serif'}}>
                            landing page show serch and filtering working
                        </span>
                    </span>
                </div>

                <div className="col-span-1 md:col-span-12 pt-[2rem]">
                    <a 
                        href="https://cerope.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block bg-blue-100 rounded-2xl h-[400px] md:h-[600px] overflow-hidden shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
                        style={{ cursor: 'none' }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                       <img 
                            src={image4}
                            alt="icon" 
                            className="w-full h-full object-contain transition-transform duration-700 ease-out hover:scale-110"
                        /> 
                    </a>
                    <span className="flex flex-col text-xl md:text-2xl font-black mt-4 md:mt-6"
                        style={{
                        fontFamily: '"Italiana", sans-serif'}}>
                        Cerope
                        <span className="flex text-base md:text-lg mt-2"
                            style={{
                            fontFamily: '"Italiana", sans-serif'}}>
                            AI personalized fashion recommender
                        </span>
                    </span>
                </div>
            </div>
        </div>

        <div className="pt-[4rem] pb-[10rem] md:pb-[20rem] w-full md:max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">


                 <div className="col-span-1 md:col-span-5">
                    <a 
                        href="https://shop-cart-three-kappa.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block bg-blue-100 rounded-2xl h-[350px] overflow-hidden shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
                        style={{ cursor: 'none' }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                         <img 
                            src={image3}
                            alt="icon" 
                            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                        />
                    </a>
                    <span className="flex flex-col text-xl md:text-2xl font-black mt-4 md:mt-6"
                        style={{
                        fontFamily: '"Italiana", sans-serif'}}>
                        Shoe Store
                        <span className="flex text-base md:text-lg mt-2"
                            style={{
                            fontFamily: '"Italiana", sans-serif'}}>
                            landing page show serch and filtering working
                        </span>
                    </span>
                </div>
                
                {/* <div className="col-span-1 md:col-span-7">
                    <div 
                        className="bg-blue-100 p-6 rounded-2xl h-[350px] md:h-[450px] flex items-start shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]"
                        style={{ cursor: 'none' }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <span className="text-2xl font-bold">1</span>
                    </div>
                    <span className="flex flex-col text-xl md:text-2xl font-black mt-4 md:mt-6"
                        style={{
                        fontFamily: '"Italiana", sans-serif'}}>
                        BlackBird Clothing
                        <span className="flex text-base md:text-lg mt-2"
                            style={{
                            fontFamily: '"Italiana", sans-serif'}}>
                            A landing page BlackBird Clothing showing parallax effect
                        </span>
                    </span>
                </div> */}

            </div>
        </div>
    </div>
  );
}