import { useEffect, useState } from "react";

const GlitchScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
            setTimeout(onFinish, 1000); // Delay sebelum masuk ke main website
        }, 3000); // Durasi glitch effect sebelum masuk ke web utama
    }, [onFinish]);

    return (
        <div className={`glitch-container ${isVisible ? "" : "hidden"}`}>
            <h1 className="glitch-text">LOADING...</h1>
        </div>
    );
};

export default GlitchScreen;
