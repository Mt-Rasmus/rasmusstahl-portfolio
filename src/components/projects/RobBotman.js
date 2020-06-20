
import React from 'react';
import TechStack from '../TechStack';

const RobBotman = (props) => {
   const techStack = ["csharp", "unity"];
   return (
      <div className="content-container content-container--project">
         <div className="content-align-sbs content-align-sbs--project">
            <div className="project-text project-text__left">
               <h1>Rob Botman</h1>
               <p>
               Single player 2D plattformer game.
               </p>
               <ul>
                  <li>You control Rob, the robot, who has to fight off waves of enemy robots.</li>
                  <li>Fire projectiles with a dragging and letting go slingshot motion.</li>
                  <li>Look for different power ups like double speed and double damage.</li>
               </ul> 
               <p>Technical details:</p> 
               <ul>
                  <li>Custom made physics using beam projection.</li>
                  <li>Developed in the Unity game engine and coded in C#.</li>
               </ul>
               <a href="https://drive.google.com/file/d/1iVpjxfnVdzYdjYHeaVVH_UboEOzqq2uc/view">
                  <button className="button">Video Demo</button>
               </a> 
               <a href="https://github.com/Mt-Rasmus/Rob-Botman">
                  <button className="button">Source code</button>
               </a>
               <p>
                  Note: Artwork made by me (created in Adobe Photoshop).
               </p>              
            </div>
            <div className="img-container-project">
               <span className="helper"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/rob1.png`} alt=""
               />                                  
            </div>  
         </div>
         <TechStack tech={techStack} index={props.index}/> 
      </div>
   )
}

export { RobBotman as default }