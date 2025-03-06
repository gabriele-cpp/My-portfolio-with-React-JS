import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulasi pengiriman pesan
        setTimeout(() => {
            setIsSubmitting(false);
            setSuccess(true);

            setTimeout(() => setSuccess(false), 3000);
        }, 2000);
    };

    return (
        <section id="contact" className="relative py-20 bg-black text-white">
            <div className="container mx-auto px-10 md:px-20 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">

                {/* BAGIAN TEKS SEBELAH KIRI */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-extrabold mb-4">Let's Connect</h2>
                    <p className="text-gray-400 mb-6">
                        If you’d like to collaborate or just say hi, feel free to reach out to me via email or social media!
                    </p>

                    <div className="flex space-x-4 mt-4">
                        <a href="https://github.com/gabriele-cpp" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-emil-2029b0185/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://x.com/GabEmiru" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition">
                            <FaTwitter />
                        </a>
                    </div>
                </motion.div>

                {/* BAGIAN FORM SEBELAH KANAN */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg space-y-4"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="Your Email"
                        />
                    </div>

                    <div className="relative">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="Your Message"
                            rows={4}
                        ></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        className="w-full py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-500 transition"
                        whileTap={{ scale: 0.95 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>

                    {success && (
                        <motion.p
                            className="mt-4 text-green-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            ✅ Message sent successfully!
                        </motion.p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
