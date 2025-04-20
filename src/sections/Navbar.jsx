import { useState } from "react";
import { navLinks } from "../constants/index.js";

// Update navLinks to include the download CV link
const updatedNavLinks = [
    ...navLinks,
    {
        id: "download-cv",
        href: "/assets/Tarankumar.P_Resume.pdf", // Ensure the resume file is located in the public/assets folder
        name: "Download CV",
    },

];

const NavItems = ({ onClick }) => {
    return (
        <ul className="nav-ul flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-gray-400">
            {updatedNavLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a
                        href={href}
                        className="nav-li_a relative text-gray-400 transition-colors duration-300
                            hover:text-white focus:text-white" // Removed the underline-related classes
                        onClick={onClick}
                        download={name === "Download CV" ? "Tarankumar_Resume" : undefined} // Only apply 'download' attribute for CV link
                    >
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 w-full p-4 scroll-smooth">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a
                    href="#home"
                    className="text-gray-400 font-bold text-xl hover:text-white transition-colors"
                >
                    Tarankumar.P
                </a>

                <button
                    onClick={toggleMenu}
                    className="text-gray-400 hover:text-white focus:outline-none sm:hidden flex"
                    aria-label="Toggle menu"
                >
                    <img
                        src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                        alt="toggle"
                        className="w-6 h-6"
                    />
                </button>

                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black p-5 shadow-lg">
                    <NavItems onClick={closeMenu} />
                </div>
            )}
        </header>
    );
};

export default Navbar;
