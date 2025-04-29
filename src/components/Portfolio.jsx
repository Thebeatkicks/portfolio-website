import PortfolioApp from "./PortfolioApp";
import { useState } from 'react';
import Popupwindow from "./Popupwindow.jsx";
import TestMySkillsImg from '../assets/logo1.svg'



function Portfolio() {
  
  const [showProjects, setShowProjects] = useState(false);

  const [popupInfo, setPopupInfo] = useState({
    title: "This is a window with information", 
    text: "This is the information",
});
  const [isOpen, setIsOpen] = useState(false);
  const closePopup = () => {
    setIsOpen(false)};

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
        <PortfolioApp  
  title="Test my skills"
  summary="In this project I had to recreate a website from a figma design. I used a lot of different techniques to get the design right. I had to learn how to use flexbox and grid."
  learned="how to use pre-processors"
  challenges="working with a deadline"
  skillsOne="#HTML"
  skillsTwo="#CSS"
  skillsThree="#PrePros"
  link="https://github.com/Thebeatkicks/test-my-skills" 
  img=""
  onClick={() => {
    setPopupInfo({
      title: "Test my skills",
      summary: "In this project I had to recreate a website from a figma design. I used a lot of different techniques to get the design right. I had to learn how to use flexbox and grid.",
      skillsOne: "#HTML",
      skillsTwo: "#CSS",
      skillsThree: "#PrePros",
      link: "https://github.com/Thebeatkicks/test-my-skills",
      img: TestMySkillsImg,
    });
    setIsOpen(true);
  }}
/>
        <PortfolioApp  title="Genesis"
                    skillsOne = "#HTML"
                    skillsTwo = "#CSS"
                    skillsThree = "#PrePros"
                    summary = "This was the first project I did that was a bit more advanced. I used a figma design to recreate a website"
                    learned = "how to use flexbox and grid"
                    challenges = "it was hard to get the design right. I had to learn how to use flexbox and grid" 
                    link = "https://github.com/Thebeatkicks/genesis"
                    img = ""
                    onClick={() => {
                      setPopupInfo({
                        title: "Genesis",
                        summary: "This was the first project I did that was a bit more advanced. I used a figma design to recreate a website",
                        skillsOne: "#HTML",
                        skillsTwo: "#CSS",
                        skillsThree: "#PrePros",
                        link: "https://github.com/Thebeatkicks/genesis",
                      });
                      setIsOpen(true);
                    }} 

                    > 
                    
          </PortfolioApp> 
          <PortfolioApp  title="React-app-1"
                    skillsOne = "#JS"
                    skillsTwo = "#REACT"
                    skillsThree = "#Tailwind"
                    summary = "A practice project to learn JS and React."
                    learned = "how to use React, how to set up a project with React, how to use components and props"
                    challenges = "how to troubleshooting errors in React." 
                    link = "https://github.com/Thebeatkicks/react-1"
                    onClick={() => {
                      setPopupInfo({
                        title: "React-app-1",
                        summary: "A practice project to learn JS and React. I learned how to use React, how to set up a project with React, how to use components and props",
                        skillsOne: "#JS",
                        skillsTwo: "#React",
                        skillsThree: "#Tailwind",
                        link: "https://github.com/thebeatkicks/react-1",
                        img: "./assets/Henrik.png",
                      });
                      setIsOpen(true);
                    }} > 
          </PortfolioApp> 
          <PortfolioApp  title="JavaScript game"
                    skillsOne = "#CSS"
                    skillsTwo = "#JavaScript"
                    skillsThree = "#HTML"
                    summary = "Vanilla JS game."
                    learned = "How to use JavaScript to create a game. How to use VSCode to write code. And how html and css works together with JS"
                    challenges = "It was hard to get the game to work." 
                    link = "https://github.com/Thebeatkicks/lesson-7"
                    onClick={() => {
                      setPopupInfo({
                        title: "JavaScript game",
                        summary: "Vanilla JS game.",
                        skillsOne: "#HTML",
                        skillsTwo: "#CSS",
                        skillsThree: "#JavaScript",
                        link: "https://github.com/Thebeatkicks/lesson-7"
                      });
                      setIsOpen(true);
                    }} /> 
        
      </div>
      
        )}
       {isOpen && <Popupwindow {...popupInfo} onClick={closePopup} />}


      </>
    );
  }

  export default Portfolio;