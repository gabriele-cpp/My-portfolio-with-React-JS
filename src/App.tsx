import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading ? (
                <LoadingScreen onFinish={() => setIsLoading(false)} />
            ) : (
                <div className="App">
                    <Navbar />
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
