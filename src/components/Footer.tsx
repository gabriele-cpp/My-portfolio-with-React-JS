const Footer = () => {
    return (
        <footer className="relative bg-gray-800 text-white py-6 text-center">
            {/* Gradient & Blur Transition */}
            <div className="absolute -top-12 left-0 w-full h-24 bg-gradient-to-t from-gray-800 via-black/50 to-transparent"></div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm mt-2">
                © {new Date().getFullYear()} Emil Gabriel. All rights reserved.
            </p>

            {/* Built With Info */}
            <p className="text-gray-400 text-sm">
                Built with <span className="text-blue-400">React.js</span>, <span className="text-blue-400">Next.js</span>, and <span className="text-blue-400">Tailwind CSS</span>.
            </p>

            {/* Fun Quote */}
            <p className="text-gray-400 italic mt-4">
                "Code is like humor. When you have to explain it, it’s bad." – Cory House
            </p>
        </footer>
    );
};

export default Footer;
