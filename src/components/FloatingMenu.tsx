import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll"; // Tambahkan react-scroll

const FloatingMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <motion.button
                className="fixed top-4 right-4 bg-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-700 transition z-50"
                onClick={() => setOpen(!open)}
                whileTap={{ scale: 0.9 }}
            >
                {open ? <FiX size={24} className="text-white" /> : <FiMenu size={24} className="text-white" />}
            </motion.button>

            {/* Menu Pop-Up */}
            {open && (
                <motion.div
                    className="fixed top-16 right-6 bg-gray-900 p-5 rounded-lg shadow-lg text-white space-y-4 z-50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link to="about" smooth={true} duration={600} offset={-50} className="block cursor-pointer hover:text-gray-300" onClick={() => setOpen(false)}>About</Link>
                    <Link to="projects" smooth={true} duration={600} offset={-50} className="block cursor-pointer hover:text-gray-300" onClick={() => setOpen(false)}>Projects</Link>
                    <Link to="contact" smooth={true} duration={600} offset={-50} className="block cursor-pointer hover:text-gray-300" onClick={() => setOpen(false)}>Contact</Link>
                </motion.div>
            )}
        </>
    );
};

export default FloatingMenu;
