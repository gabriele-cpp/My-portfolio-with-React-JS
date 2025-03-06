import { motion } from "framer-motion";

const Sprite = () => {
    return (
        <motion.div
            className="w-full md:w-[450px] lg:w-[550px] select-none pointer-events-none"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <img
                src="/images/profile.png"
                alt="My Sprite"
                className="w-full h-auto object-cover"
                style={{
                    maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))",
                    WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0))",
                }}
            />
        </motion.div>
    );
};

export default Sprite;
