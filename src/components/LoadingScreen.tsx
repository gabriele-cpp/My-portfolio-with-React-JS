import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../App.css"; // Pastikan ini mengandung efek glitch

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsGlitching(true); // Mulai glitch effect setelah beberapa detik
            setTimeout(onFinish, 2000); // Setelah glitch selesai, pindah ke portfolio utama
        }, 4000); // Web "penantian" tampil selama 4 detik sebelum glitch dimulai
    }, [onFinish]);

    return (
        <motion.div
            className={`loading-container ${isGlitching ? "glitch-active" : ""}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: isGlitching ? 0 : 1 }}
            transition={{ duration: 1 }}
        >
            <div className="loading-content">
                <h1 className="loading-title">GBRYLL.</h1>
                <p className="loading-subtitle">Under Construction...</p>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
