import React from "react";
import PortfolioApp from "./PortfolioApp.jsx";

export default function Popupwindow(props) {
    const {
      title,
      summary,
      learned,
      vid,
      img,
      link,
      challenges,
      skills = [],
      onClick
    } = props;
  
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
  
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
  
          <div className="flex justify-between items-center">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
                  alt="github"
                  className="w-6 h-6 inline-block ml-2"
                />
              </a>
            )}
  
            <button
              onClick={onClick}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            >
              Stäng
            </button>
          </div>
        </div>
      </div>
    );
  }