import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
<section className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center min-h-screen px-6 md:px-16 max-w-7xl mx-auto gap-y-8">
{/* Vänster sida */}
<div className="flex flex-col items-center md:flex-1 md:items-start text-center md:text-left justify-center mb-4 md:mb-0 gap-2">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">
            Henrik Martini         
            </h2>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
            Frontend Developer
          </h2>
          <div className="text-center mt-5 mb-2 flex flex-row gap-2 justify-center">
        
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                    #HTML
                </span>
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
                    #CSS
                </span>
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
                    #JavaScript
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                    #REACT
                </span>
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
                    #TailwindCSS
                </span>
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset ">
                    #Bootstrap
                </span>
        </div>
        </div>
  
        {/* Höger sida */}
        <div className="flex flex-col items-center md:flex-1 md:items-start text-center md:text-left justify-center gap-2">
        <p className="text-lg md:text-xl text-white-600 mb-6">
            I create modern, responsive websites and applications with React and Tailwind CSS.          
            </p>
          <div className="flex flex-row flex-wrap gap-2 md:gap-4">
          <Link to="/portfolio" className="bg-[#69c0ca] hover:bg-[#6f3ce6] text-white font-bold py-3 px-6 rounded-lg text-center">
            My Portfolio
            </Link>
            <button className="bg-[#6f3ce6] hover:bg-[#69c0ca] text-white-800 font-bold py-3 px-6 rounded-lg">
              My Components 
            </button>
          </div>
        </div>
      </section>
    );
  }