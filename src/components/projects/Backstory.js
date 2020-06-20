
import React from 'react';
import TechStack from '../TechStack';

const Backstory = (props) => {
   const techStack = ["javascript", "html5", "css3", "sass", "react", "firebase", "webpack", "git"];
   return (
      <div className="content-container content-container--project box-slant">
         <div className="content-align-sbs content-align-sbs--project content-align-sbs--project--left">
            <div className="img-container-project img-container-project--left">
               <span className="helper helper__double"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/backstory1.png`} alt=""
               />
               <img 
                  className="img-project"
                  src={`/images/projects/backstory2.png`} alt=""
               />             
            </div>  
            <div className="project-text">
               <h1>Backstory</h1>
               <p>
                  Backstory is a social game.
               </p>
               <h3>How to play:</h3>
               <p>
                  One person will act as game leader. 
                  This person selects a story and reads its premise aloud to everyone. 
                  The game leader then reads the backstory to him-/herself without 
                  revealing it to the group. 
                  The rest of the group then have to ask questions to the game leader 
                  in order to figure out what the backstory is. 
                  They may only ask 'yes' or 'no' questions.
                  You can mark what stories you have already 'solved' and filter them out.              
               </p>
               <p>Technical details:</p> 
               <ul>
                  <li>Firebase used for database management. </li>
                  <li>State management: React </li>
                  <li>Responsive design. </li>
               </ul>
               <p>
                  Note: Illustrations made by me (drawn in Adobe Animate).
               </p> 
               <a href="https://backstory-game.herokuapp.com/dashboard">
               <button className="button">Visit site</button>
               </a>
               <a href="https://github.com/Mt-Rasmus/Backstory">
                  <button className="button">Source code</button>
               </a>                                  
            </div>

         </div>
         <TechStack tech={techStack} index={props.index}/> 
      </div>
   )
}

export { Backstory as default }