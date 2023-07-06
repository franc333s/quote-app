import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Topbar from "./components/topbar/Topbar";
import About from "./views/About";
import Home from "./views/Home";


function App() {

  return (
    <>
        <header>
            <Topbar />
        </header>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>

        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default App
