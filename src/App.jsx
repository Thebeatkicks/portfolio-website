import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx";
import Blog from './components/Blog.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx'; 

function App() {
  return (
    <div 
      className="
        grid min-h-screen grid-rows-[auto_1fr_auto] bg-gradient-to-br from-purple-300 via-blue-100 to-pink-300
        "
    >
      <Header />
     <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </main>
      <Footer />
    </div>
  )
}
export default App