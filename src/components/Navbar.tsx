import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Function untuk scroll ke section tertentu
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full px-10 py-4 flex justify-between items-center text-white z-50 transition-all duration-300 ${
                scrolling ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <button onClick={() => scrollToSection("hero")} className="text-xl font-bold cursor-pointer">
                GBRYLL.
            </button>
            <div className="flex space-x-6">
                <button onClick={() => scrollToSection("about")} className="text=l font-bold hover:text-gray-300">
                    About
                </button>
                <button onClick={() => scrollToSection("projects")} className="text-l font-bold hover:text-gray-300">
                    Projects
                </button>
                <button onClick={() => scrollToSection("contact")} className="text-l font-bold hover:text-gray-300">
                    Contact
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
