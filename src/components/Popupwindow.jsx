import React from "react";
import PortfolioApp from "./PortfolioApp.jsx";

export default function Popupwindow({
    title,
    summary,
    skillsOne,
    skillsTwo,
    skillsThree,
    link,
    onClick,
    vid,
  }) {
    return (
      <div className="fixed inset-0 bg-[#1b1b1f] bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-[#262b38] text-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          {vid && (
          <video
            src={vid}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded mb-4"
          />
          )}
      

          <p className="mb-2">{summary}</p>
          <div className="flex gap-2 flex-wrap mb-4">
            <span className="bg-gray-200 text-black px-2 py-1 rounded text-xs">{skillsOne}</span>
            <span className="bg-gray-200 text-black px-2 py-1 rounded text-xs">{skillsTwo}</span>
            <span className="bg-gray-200 text-black px-2 py-1 rounded text-xs">{skillsThree}</span>
          </div>
          <div className="flex justify-between items-center">
            <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 underline"><img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" alt="github" className="w-6 h-6 inline-block ml-2" /></a>

            <button onClick={onClick} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Stäng
            </button>
          </div>
        </div>
      </div>
    );
  }