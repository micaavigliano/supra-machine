"use client"

import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="flex justify-between items-center bg-white py-4 px-8 shadow border-b-2 border-[#D2CECE]">
            <div className="flex items-center">
                <Link href="/">
                    <img src="supra-logo.jpeg" alt="Supra Machine Logo" className="h-20" />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex ml-auto space-x-6 text-sm font-medium text-[#444444]">
                <Link href="/#quienes-somos" className="pb-1 border-b-2 border-transparent hover:border-[#FEC002]">QUIENES SOMOS</Link>
                <Link href="/#obras" className="pb-1 border-b-2 border-transparent hover:border-[#FEC002]">OBRAS</Link>
                <Link href="/#contacto" className="pb-1 border-b-2 border-transparent hover:border-[#FEC002]">CONTACTO</Link>
                <Link href="#esp" className="pb-1 border-b-2 border-transparent hover:border-[#FEC002]">ESP</Link>
                <Link href="#eng" className="pb-1 border-b-2 border-transparent hover:border-[#FEC002]">ENG</Link>
            </nav>

            {/* Hamburger Menu */}
            <button
                className="block md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#FEC002]"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
            >
                <span className="sr-only">Open menu</span>
                <svg
                    className="h-6 w-6 text-[#444444]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>

            {/* Mobile Navigation */}
            <nav
                id="mobile-menu"
                className={`absolute top-16 right-0 bg-white shadow-md rounded-lg p-4 space-y-4 text-sm font-medium text-[#444444] md:hidden ${menuOpen ? "block" : "hidden"
                    } z-50`}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }} // Slight transparency for better distinction
            >
                <Link href="/#quienes-somos" className="block hover:text-[#FEC002]">QUIENES SOMOS</Link>
                <Link href="/#obras" className="block hover:text-[#FEC002]">OBRAS</Link>
                <Link href="/#contacto" className="block hover:text-[#FEC002]">CONTACTO</Link>
                <Link href="#esp" className="block hover:text-[#FEC002]">ESP</Link>
                <Link href="#eng" className="block hover:text-[#FEC002]">ENG</Link>
            </nav>
        </header>
    );
};

export default Header;
