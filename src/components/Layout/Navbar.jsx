import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
         className={`fixed z-[3000] w-full bg-transparent transition-all duration-300 ease-in-out 
                    ${hidden ? "-translate-y-full duration-500" : "translate-y-0"}
                    `}
      >
        <div className=" max-w-7xl mx-auto px-6 flex justify-between items-center py-8">
          {/* Logo with hover animation */}
          <a 
            href="/" 
            className="relative inline-block w-full ml-20 h-8 leading-8 overflow-hidden text-3xl font-bold text-white  group"
          >
            <span className="absolute  transition-all duration-500 ease-in-out whitespace-nowrap opacity-100 translate-x-0 group-hover:opacity-0 group-hover:-translate-x-full">
              HB
            </span>
            <span className="absolute  transition-all duration-500 ease-in-out whitespace-nowrap opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0">
              Harsh Barman
            </span>
          </a>

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-12">
            <a 
              href="/projects" 
              className="relative text-white text-2xl no-underline transition-colors duration-300 ease-in-out hover:animate-pulse
                after:content-[''] after:absolute after:left-1/2 after:-bottom-3.5 after:w-1.5 after:h-1.5 
                after:bg-white after:rounded-full after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-300
                hover:after:scale-100
              "
              style={{ animation: 'none' }}
              onMouseEnter={(e) => {
                e.target.style.animation = 'shake 0.4s ease';
              }}
              onAnimationEnd={(e) => {
                e.target.style.animation = 'none';
              }}
            >
              Projects
            </a>
            <a 
              href="/about" 
              className="relative text-white text-2xl no-underline transition-colors duration-300 ease-in-out hover:animate-pulse
                after:content-[''] after:absolute after:left-1/2 after:-bottom-3.5 after:w-1.5 after:h-1.5 
                after:bg-white after:rounded-full after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-300
                hover:after:scale-100
              "
              style={{ animation: 'none' }}
              onMouseEnter={(e) => {
                e.target.style.animation = 'shake 0.4s ease';
              }}
              onAnimationEnd={(e) => {
                e.target.style.animation = 'none';
              }}
            >
              About
            </a>
            <a 
              href="#" 
              className="relative text-white text-2xl no-underline transition-colors duration-300 ease-in-out hover:animate-pulse
                after:content-[''] after:absolute after:left-1/2 after:-bottom-3.5 after:w-1.5 after:h-1.5 
                after:bg-white after:rounded-full after:-translate-x-1/2 after:scale-0 after:transition-transform after:duration-300
                hover:after:scale-100
              "
              style={{ animation: 'none' }}
              onMouseEnter={(e) => {
                e.target.style.animation = 'shake 0.4s ease';
              }}
              onAnimationEnd={(e) => {
                e.target.style.animation = 'none';
              }}
            >
              Contact
            </a>
          </div>
        </div>  
      </nav>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-2px); }
          80% { transform: translateX(2px); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
