import React from "react";
import PortfolioApp from "./PortfolioApp.jsx";

export default function Popupwindow({
    title,
    summary,
    learned,
    challenges,
    skillsOne,
    skillsTwo,
    skillsThree,
    link,
    onClick
  }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white text-black p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="mb-2">{summary}</p>
          <p className="mb-2 italic">Learned: {learned}</p>
          <p className="mb-4 italic">Challenges: {challenges}</p>
          <div className="flex gap-2 flex-wrap mb-4">
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">{skillsOne}</span>
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">{skillsTwo}</span>
            <span className="bg-gray-200 px-2 py-1 rounded text-xs">{skillsThree}</span>
          </div>
          <div className="flex justify-between items-center">
            <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 underline">GitHub</a>
            <button onClick={onClick} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Stäng
            </button>
          </div>
        </div>
      </div>
    );
  }