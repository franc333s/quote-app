import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Topbar from "./components/topbar/Topbar";
import About from "./views/About";
import Home from "./views/Home";



function App() {

    const [Theme, setTheme] = useState('theme-1');

    const themes = ['theme-1', 'theme-2', 'theme-3', 'theme-4', 'theme-5']


    const toggleTheme = () => {
        setTheme((currTheme) => {
            const currentIndex = themes.indexOf(currTheme);
            const nextIndex = (currentIndex + 1) % themes.length;
            return themes[nextIndex];
        });
    };

    return (
        <>
        <div className={`quote-app ${Theme}`}>
            <header>
                <Topbar />
            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>

            <footer>
                <Footer onThemeChange={toggleTheme}/>
            </footer>
        </div>
        </>
    )
}

export default App
