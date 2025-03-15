import { useState } from "react";
import { motion } from "framer-motion";

// Array foto untuk thumbnail dan foto utama
const photos = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg"
];

const About = () => {
    const [mainPhoto, setMainPhoto] = useState(photos[0]); // Foto utama default

    return (
        <section id="about" className="relative py-20 bg-black text-white">
            <div className="container mx-auto px-10 md:px-20 flex flex-col md:flex-row items-center gap-10">

                {/* Foto Utama dengan Efek Parallax */}
                <motion.div
                    className="relative w-72 h-96 overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05 }} // Efek hover smooth
                    initial={{ y: 0 }}
                    whileInView={{ y: [-10, 10, -10] }} // Efek parallax lambat
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                    <motion.img
                        key={mainPhoto}
                        src={mainPhoto}
                        alt="Main"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>

                {/* Bagian Teks */}
                <div className="flex-1">
                    <h2 className="text-4xl font-extrabold cursor-pointer transition-all hover:text-blue-400">
                        About Me
                    </h2>
                    <motion.p
                        className="text-gray-400 mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <span className="text-blue-400 font-bold">I am a Amateur</span>,
                        <span className="text-blue-400 font-bold"> UI/UX Designer</span> and <span className="text-blue-400 font-bold">Editor.</span> Always wanted to creating stunning digital experiences.
                    </motion.p>

                    {/* What I Do */}
                    <h3 className="text-2xl font-bold mt-6">What I Do</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <motion.div
                            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                        >
                            <h4 className="font-bold">Frontend Development</h4>
                            <p className="text-gray-400 text-sm">Building UI with React, Next.js, and Tailwind CSS.</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                        >
                            <h4 className="font-bold">Editing</h4>
                            <p className="text-gray-400 text-sm">Photography and Videography</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                        >
                            <h4 className="font-bold">UI/UX Design</h4>
                            <p className="text-gray-400 text-sm">Designing with Figma & Adobe XD.</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer"
                            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                        >
                            <h4 className="font-bold">Problem Solving</h4>
                            <p className="text-gray-400 text-sm">Optimizing code & algorithms.</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Gambar Thumbnail dengan Hover Effect */}
            <div className="flex justify-center gap-4 mt-6">
                {photos.map((photo, index) => (
                    <motion.img
                        key={index}
                        src={photo}
                        alt={`Thumbnail ${index}`}
                        className={`w-16 h-16 rounded-lg shadow-lg object-cover cursor-pointer transition-all
                        ${mainPhoto === photo ? "opacity-50" : "hover:scale-110 hover:blur-sm"}`}
                        onClick={() => setMainPhoto(photo)} // Klik untuk ganti foto utama
                        whileTap={{ scale: 0.9 }}
                    />
                ))}
            </div>
        </section>
    );
};

export default About;
