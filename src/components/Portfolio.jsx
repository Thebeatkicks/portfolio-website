import PortfolioApp from "./PortfolioApp";
import { useState } from 'react';
import Popupwindow from "./Popupwindow.jsx";



function Portfolio() {
  
  const [showProjects, setShowProjects] = useState(false);
  const [popupInfo, setPopupInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const closePopup = () => {
    setIsOpen(false)};

    const projects = [
      {
        title: "Test my skills",
        summary: "In this project I had to recreate a website...",
        learned: "how to use pre-processors",
        challenges: "working with a deadline",
        skillsOne: "#HTML",
        skillsTwo: "#CSS",
        skillsThree: "#PrePros",
        link: "https://github.com/Thebeatkicks/test-your-skills",
        img: "testyourskills.png",
        vid: "testyourskillsvid.mp4",
      },
      {
        title: "Genesis",
        summary: "This was the first project I did...",
        learned: "how to use flexbox and grid",
        challenges: "getting the layout right",
        skillsOne: "#HTML",
        skillsTwo: "#CSS",
        skillsThree: "#Grid",
        link: "https://github.com/Thebeatkicks/genesis",
        img: "/assets/genesis.png"
      },
      {
        title: "JS Vanilla Game",
        summary: "This was the first project I did...",
        learned: "how to use flexbox and grid",
        challenges: "getting the layout right",
        skillsOne: "#HTML",
        skillsTwo: "#CSS",
        skillsThree: "#Grid",
        link: "https://github.com/Thebeatkicks/genesis",
        img: "/assets/genesis.png"
      },
      {
        title: "Productly",
        summary: "In this project I had to recreate a website from a figma design. I used a lot of different techniques to get the design right. I had to learn how to use flexbox and grid.",
        learned: "how to use pre-processors",
        challenges: "working with a deadline",
        skillsOne:"#HTML",
        skillsTwo:"#CSS",
        skillsThree:"#PrePros",
        link:"https://github.com/Thebeatkicks/productly",
        img:"",
      },
      { 
        title: "React-app-1",
        skillsOne: "#JS",
        skillsTwo: "#REACT",
        skillsThree: "#Tailwind",
        summary: "A practice project to learn JS and React.",
        learned: "how to use React, how to set up a project with React, how to use components and props",
        challenges: "how to troubleshooting errors in React.",
        link: "https://github.com/Thebeatkicks/react-1",
      },
    ];
    const filteredProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
      <h1 className="text-3xl font-bold text-center mt-8">My Portfolio</h1>
      <div className="text-center mt-10 mb-8">
      <button 
        onClick={() => setShowProjects(!showProjects)}
        className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 border-2"
      >
        {showProjects ? 'Dölj mina projekt' : 'Visa mina projekt'}
      </button>
        </div>

        {showProjects && (
      <div className="container-row">
        
        {filteredProjects.map((project, index) => (
  <PortfolioApp
    key={index}
    {...project}
    onClick={() => {
      setPopupInfo(project);
      setIsOpen(true);
    }}
  />
))}
        
      </div>
      
        )}
       {isOpen && <Popupwindow {...popupInfo} onClick={closePopup} />}


      </>
    );
  }

  export default Portfolio;