import { motion } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
    { title: "Mount Bromo", video: "/videos/project1.webm" },
    { title: "A gabut day w me", video: "/videos/project2.webm" },
    { title: "Typography", video: "/videos/project3.webm" },
];

const Projects = () => {
    return (
        <section id="projects" className="relative py-20 bg-black text-white">
            <div className="container mx-auto px-10 md:px-20">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-10">My Projects</h2>

                {/* Grid Projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} title={project.title} video={project.video} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ title, video }: { title: string; video: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative rounded-lg overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => {
                setIsHovered(true);
                videoRef.current?.play();
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                videoRef.current?.pause();
                videoRef.current!.currentTime = 0; // Reset video saat hover keluar
            }}
        >
            {/* Video Preview */}
            <video
                ref={videoRef}
                src={video}
                loop
                muted
                className={`w-full h-64 object-cover transition-all duration-500 ${
                    isHovered ? "filter-none brightness-100" : "blur-lg brightness-50"
                }`}
            />

            {/* Overlay untuk Judul */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-all duration-300">
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
        </motion.div>
    );
};

export default Projects;
