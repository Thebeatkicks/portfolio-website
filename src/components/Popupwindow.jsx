import React from "react";
import PortfolioApp from "./PortfolioApp.jsx";

export default function Popupwindow({ title, text, onClick }) {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white text-black p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base mb-6">{text}</p>
        <div className="text-right">
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
  };
  