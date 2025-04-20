import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-4 items-center justify-center">
                <a href="https://github.com/tarankumar001" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6 object-contain" />
                </a>
                <a href="https://www.linkedin.com/in/tarankumar-p-954948257/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6 object-contain" />
                </a>
                <a href="https://medium.com/@ptarankumar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <img src="/assets/medium.svg" alt="Medium" className="w-6 h-6 object-contain" />
                </a>
                <a href="https://www.instagram.com/tarankumar_p/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                    <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6 object-contain" />
                </a>
            </div>


            <p className="text-white-500">© {currentYear} P.Tarankumar. All rights reserved.</p>
        </section>
    );
};
export default Footer;
