import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="w-full h-20 px-8 sm:px-12 py-6 border-b border-black flex justify-between items-center relative">
            <div className="flex items-center space-x-2">
                <span className="text-zinc-800 text-xl sm:text-2xl font-normal font-epilogue leading-loose">Kaushik</span>
                <span className="text-zinc-800 text-xl sm:text-2xl font-semibold font-epilogue leading-loose">Indukuri</span>
            </div>

            {/* Desktop Menu - Centered on large screens */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-12">
                <Link to="/" className="nav-txt">About</Link>
                <Link to="/projects" className="nav-txt">Projects</Link>
                <Link to="/writing" className="nav-txt">Writing</Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden flex flex-col space-y-1.5">
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
            </button>

            {/* Mobile Menu Dropdown */}
            <div
                className={`absolute top-full right-0 w-48 bg-white border border-black shadow-lg lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">About</Link>
                <Link to="/projects" className="block px-4 py-2 hover:bg-gray-100">Projects</Link>
                <Link to="/writing" className="block px-4 py-2 hover:bg-gray-100">Writing</Link>
            </div>
        </nav>
    );
};

export default Navbar;