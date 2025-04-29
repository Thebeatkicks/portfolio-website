import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx";
import About from './components/About.jsx';
import Login from './components/Login.jsx'; 

function App() {
  return (
    <div 
      className="
        grid min-h-screen grid-rows-[auto_1fr_auto] bg-[#1b1b1f] text-white
        font-poppins"
    >
      <Header />
     <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </main>
      <Footer />
    </div>
  )
}
export default App