import PortfolioApp from "./PortfolioApp";
import { useState } from 'react';

function Portfolio() {
  
  const [showProjects, setShowProjects] = useState(false);

    return (
      <>
      <h1 className="text-3xl font-bold text-center mt-8">My Portfolio</h1>
      <div className="text-center mt-10 mb-8">
      <button 
        onClick={() => setShowProjects(!showProjects)}
        className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        {showProjects ? 'Dölj mina projekt' : 'Visa mina projekt'}
      </button>
        </div>

        {showProjects && (
      <div className="container-row">
        <PortfolioApp  title="Test my skills"
                    skillsOne = "#HTML"
                    skillsTwo = "#CSS"
                    skillsThree = "#PrePros"
                    summary = "In this project I had to recreate a website from a figma design. I used a pre-processor to make the css more readable and easier to work with."
                    learned = "how to use pre-processors"
                    challenges = "how to work with a hard deadline. Preposessor was new to me and in what order you do things" 
                    link = "https://github.com/Thebeatkicks/test-your-skills"> 
        </PortfolioApp> 
        <PortfolioApp  title="Genesis"
                    skillsOne = "#HTML"
                    skillsTwo = "#CSS"
                    skillsThree = "#PrePros"
                    summary = "This was the first project I did that was a bit more advanced. I used a figma design to recreate a website"
                    learned = "how to use flexbox and grid"
                    challenges = "it was hard to get the design right. I had to learn how to use flexbox and grid" 
                    link = "https://github.com/Thebeatkicks/genesis"> 
          </PortfolioApp> 
          <PortfolioApp  title="React-app-1"
                    skillsOne = "#JS"
                    skillsTwo = "#REACT"
                    skillsThree = "#Tailwind"
                    summary = "A practice project to learn JS and React."
                    learned = "how to use React, how to set up a project with React, how to use components and props"
                    challenges = "how to troubleshooting errors in React." 
                    link = "https://github.com/Thebeatkicks/react-1"> 
          </PortfolioApp> 
          <PortfolioApp  title="JavaScript game"
                    skillsOne = "#CSS"
                    skillsTwo = "#JavaScript"
                    skillsThree = "#HTML"
                    summary = "Vanilla JS game."
                    learned = "How to use JavaScript to create a game. How to use VSCode to write code. And how html and css works together with JS"
                    challenges = "It was hard to get the game to work." 
                    link = "https://github.com/Thebeatkicks/lesson-7"> 
        </PortfolioApp> 
      </div>
        )}
      </>
    );
  }

  export default Portfolio;

  