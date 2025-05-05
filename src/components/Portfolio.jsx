import PortfolioApp from "./PortfolioApp";
import { useState } from "react";
import Popupwindow from "./Popupwindow.jsx";

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);
  const [popupInfo, setPopupInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedTag, setSelectedTag] = useState(null);

  const closePopup = () => {
    setIsOpen(false);
  };

  const projects = [
    {
      title: "Test my skills",
      summary:
        "In this project I had to recreate a website from a figma design. I used a lot of different techniques to get the design right. I had to learn how to use flexbox and grid. This assignment was a bit tricky because I had to learn how to use pre-processors.",
      learned: "how to use pre-processors",
      challenges: "working with a deadline",
      skills: ["#HTML", "#CSS", "#PrePros"],
      link: "https://github.com/Thebeatkicks/test-your-skills",
      img: "testyourskills.png",
      vid: "testyourskillsvid.mp4",
    },
    {
      title: "Genesis",
      summary:
        "In this project I had to recreate a website from a figma design. I used a lot of different techniques to get the design right. I had to learn how to use flexbox and grid.",
      learned: "how to use flexbox and grid",
      challenges: "getting the layout right",
      skills: ["#HTML", "#CSS", "#Grid"],
      link: "https://github.com/Thebeatkicks/genesis",
      img: "Genesis.png",
      vid: "genesisvid.mp4",
    },
    {
      title: "JS Vanilla Game",
      summary:
        "This is a simple game made with vanilla JS. I had to learn how to use the DOM and how to create a game loop.",
      learned: "how to use the DOM, how to create a game loop",
      challenges: "getting the game loop right",
      skills: ["#JavaScript", "#CSS", "#HTML"],
      link: "https://github.com/Thebeatkicks/javasript-7",
      img: "vanillagame.png",
      vid: "vanillagamevid.mp4",
    },
    {
      title: "Productly",
      summary:
        "In this project I had to recreate a website from a figma design. I used a lot of different techniques to get the design right. I had to learn how to use flexbox and grid.",
      learned: "how to make a navigation bar, how to use flexbox and grid",
      challenges: "working with a deadline",
      skills: ["#HTML", "#CSS", "#PrePros"],
      link: "https://github.com/Thebeatkicks/productly",
      img: "productly.png",
      vid: "productlyvid.mp4",
    },
    {
      title: "Portfolio",
      summary:
        "This is my portfolio. I had to learn how to use React and how to create a portfolio.",
      learned: "how to use React, how to create a portfolio",
      challenges: "getting the layout right",
      skills: ["#React", "#CSS", "#HTML", "#JavaScript"],
      link: "https://github.com/Thebeatkicks/my-portfolio-app",
      img: "portfolio.png",
      vid: "portfolioAPp.mp4",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      (
        project.title +
        " " +
        project.summary +
        " " +
        project.learned +
        " " +
        project.challenges +
        " " +
        project.skills.join(" ")
      )
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
  
    const matchesTag = selectedTag
      ? project.skills.includes(selectedTag)
      : true;
  
    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(projects.flatMap((project) => project.skills))
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8">My Portfolio</h1>

      <div className="text-center mt-10 mb-8">
        <button
          onClick={() => setShowProjects(!showProjects)}
          className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 border-2"
        >
          {showProjects ? "Dölj mina projekt" : "Visa mina projekt"}
        </button>
      </div>

      {showProjects && (
        <>
        {/* Filter by text */}
          <div className="text-center mb-6">
            <input
              type="text"
              placeholder="Sök projekt..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 w-full max-w-md"
            />
          </div>
{/* Filter by tags */}
                      <div className="flex flex-wrap justify-center gap-2 mt-4 mb-8">
              {allTags.map((tag, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    selectedTag === tag
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300"
                  } hover:bg-blue-100 transition`}
                >
                  {tag}
                </button>
              ))}
            </div>
          <div className="container-row">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <PortfolioApp
                  key={index}
                  {...project}
                  onClick={() => {
                    setPopupInfo(project);
                    setIsOpen(true);
                  }}
                />
              ))
            ) : (
              <p className="text-gray-400 italic text-center w-full">
                No matching projects found              </p>
            )}
          </div>
        </>
      )}

      {isOpen && <Popupwindow {...popupInfo} onClick={closePopup} />}
    </>
  );
}

export default Portfolio;
