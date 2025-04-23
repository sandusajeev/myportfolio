import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to detect scroll position
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true); // Change background when scrolled
    } else {
      setIsScrolled(false); // Reset background when at the top
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full px-8 flex items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-purple-800' : 'bg-gradient-to-r from-purple-500 to-purple-900'}`}
      style={{ height: "80px" }}
    >
      <div className="container mx-auto flex justify-start items-center">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-white"
        >
          PORTFOLIO
        </motion.h1>
      </div>
    </header>
  );
}

export default Header;

