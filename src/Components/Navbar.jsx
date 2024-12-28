import React, { useState } from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={`${styles.navbar} bg-[#2C3E50] p-4 rounded-lg shadow-md`}>
      <div className="flex items-center justify-between">
        
        <div className="relative md:hidden">
          <button
            className="w-8 h-8 flex flex-col justify-between items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-full h-1 bg-[#FAFAFA] rounded transition-transform duration-300 ${
                isOpen ? 'transform rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-full h-1 bg-[#FAFAFA] rounded transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-full h-1 bg-[#FAFAFA] rounded transition-transform duration-300 ${
                isOpen ? 'transform -rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      <ul
        className={`absolute md:static top-16 left-0 w-full bg-[#2C3E50] rounded-lg transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:flex md:opacity-100 md:visible md:gap-4 md:items-center md:justify-center`}
      >
        <li className="text-[#FAFAFA] font-semibold text-lg py-2 px-4 cursor-pointer transition-all hover:text-[#87CEEB] hover:bg-[#34495E] rounded-lg">
          Home
        </li>
        <li className="text-[#FAFAFA] font-semibold text-lg py-2 px-4 cursor-pointer transition-all hover:text-[#87CEEB] hover:bg-[#34495E] rounded-lg">
          Events
        </li>
        <li className="text-[#FAFAFA] font-semibold text-lg py-2 px-4 cursor-pointer transition-all hover:text-[#87CEEB] hover:bg-[#34495E] rounded-lg">
          Testimonials
        </li>
        <li className="text-[#FAFAFA] font-semibold text-lg py-2 px-4 cursor-pointer transition-all hover:text-[#87CEEB] hover:bg-[#34495E] rounded-lg">
          Team
        </li>
        <li className="text-[#FAFAFA] font-semibold text-lg py-2 px-4 cursor-pointer transition-all hover:text-[#87CEEB] hover:bg-[#34495E] rounded-lg">
          About Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
