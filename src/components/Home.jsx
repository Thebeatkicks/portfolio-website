import frontpage from "../assets/henrik.png";

function Home() {
  return (
    <div className='
    mt-10'> 
      
      <img src={frontpage} alt="Henrik" className="mx-auto mt-4 w-1/2 h-auto grayscale brightness-50 rounded-full" />
      <div className="text-center mt-5 mb-10 flex flex-row gap-2 justify-center">
        
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
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
                    #Bootstrap
                </span>
        </div>
    </div>
  )
}

export default Home