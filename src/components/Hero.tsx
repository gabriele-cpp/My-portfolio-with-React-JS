import { motion } from "framer-motion";
import Sprite from "./Sprite";

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-20 lg:px-32 gap-10 text-white">
            {/* Sprite Foto Kiri */}
            <motion.div
                className="flex justify-center md:justify-start w-full md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <Sprite />
            </motion.div>

            {/* Teks Kanan */}
            <motion.div
                className="md:w-1/2 text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-300">
                    DIGITAL <br /> EXPERIENCE. <br />
                    DESIGNER <br /> & DEVELOPER
                </h1>
                <p className="text-gray-400 text-sm md:text-lg mt-2">
                    Based in <span className="text-white">Indonesia</span>
                </p>
                <button className="mt-4 px-6 py-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> Available Now
                </button>
            </motion.div>
        </section>
    );
};

export default Hero;
