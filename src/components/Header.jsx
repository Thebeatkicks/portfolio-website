import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Logo from './Logo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };
  return (
    <header 
        className="
            flex items-center justify-between px-4 md:px-10 h-20
            relative text-white border-b-2 border-gray-800 
            "
    >
        <Logo />
        <Nav 
            isOpen={isOpen}
            toggleMenu={toggleMenu}
        />
        <div className="flex items-center gap-4 md:hidden">
                <a href="http://github.com/thebeatkicks"><img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="github" className="w-6 h-6 inline-block ml-2" /></a>

                <button onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />} 
                </button>
        </div>
    </header>
  );
}   

export default Header;