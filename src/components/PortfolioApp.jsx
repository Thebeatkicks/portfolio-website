import screen from "../assets/logo1.svg";
import './portfolioApp.css';
import { useState } from "react";

function PortfolioApp(props) {
  
return (
    <>
    
      <div className="cursor-pointer container hover:scale-105 transition-transform duration-300 ease-in-out bg-[#232a38] text-white rounded-lg shadow-lg p-4 m-4"
      onClick={props.onClick}>
        <h2 className="card-title">{props.title}</h2>
        <img src={screen} className="img" alt="Placeholder" />
        <img src={props.img} className="img" alt="Placeholder" />
        
        <p className="card-text"> {props.summary}</p>
        <p className="card-text">I learned {props.learned}</p>
        <p className="card-text">The biggest challenge was {props.challenges}</p>
        <div classname="flex-row gap-2 mt-2 mb-2"> 
        <p>Tech showcased:</p>
            <div className="flex flex-row gap-2 mt-2 mb-2">
                
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
                    {props.skillsOne}
                </span>
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
                    {props.skillsTwo}
                </span>
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
                    {props.skillsThree}
                </span>
                <a href={props.link} className="link"><img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="github" className="w-6 h-6 inline-block ml-2" /></a>
        
        </div>
        </div>
      </div>
      
    </>
  );
  }

export default PortfolioApp;