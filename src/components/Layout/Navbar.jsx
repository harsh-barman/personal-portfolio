import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHamburger, setShowHamburger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.3; // 60vh

      setIsScrolled(currentScrollY > 50);
      setShowHamburger(currentScrollY > scrollThreshold);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          <div className={`hidden md:flex gap-12 transition-opacity duration-300 ${showHamburger ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
              href="/#contact" 
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

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`fixed top-8 right-8 z-[4000] w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
          showHamburger ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20 pointer-events-none'
        } ${menuOpen ? 'bg-indigo-500' : 'bg-gray-800'}`}
        aria-label="Toggle menu"
      >
        {!menuOpen ? (
          <div className="flex flex-col gap-1.5">
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </div>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Overlay - only shows when menu is open */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 z-[3400] ${
          menuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* 30% Width Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full md:w-[30%] w-[65%] z-[3500] bg-gray-900 transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-32">
          {/* Navigation Title */}
          <div className="mb-8">
            <p className="text-gray-400 text-xs tracking-widest uppercase">Navigation</p>
            <div className="w-full h-px bg-gray-700 mt-6"></div>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-4">
            <a
              href="/"
              className="text-white text-4xl font-light hover:text-indigo-400 transition-colors duration-300 pl-8"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/projects"
              className="text-white text-4xl font-light hover:text-indigo-400 transition-colors duration-300 pl-8"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="/about"
              className="text-white text-4xl font-light hover:text-indigo-400 transition-colors duration-300 pl-8"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="/#contact"
              className="text-white text-4xl font-light hover:text-indigo-400 transition-colors duration-300 pl-8"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>

          {/* Socials */}
          <div className="mt-auto mb-12">
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-4">Socials</p>
            <div className="flex flex-col gap-3 text-white text-sm">
              
              <a 
                href="https://github.com/harsh-barman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                GitHub
              </a>

              <a 
                href="https://www.linkedin.com/in/harsh-08-barman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                LinkedIn
              </a>

            </div>
          </div>
        </div>
      </div>

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