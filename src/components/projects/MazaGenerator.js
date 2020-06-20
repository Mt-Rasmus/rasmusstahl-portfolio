

import React from 'react';
import TechStack from '../TechStack';

const MazeGenerator = (props) => {
   const techStack = ["csharp", "unity"];
   return (
      <div className="content-container content-container--project box-slant box-slant__2">
         <div className="content-align-sbs content-align-sbs--project content-align-sbs--project--left">
            <div className="img-container-project img-container-project--left">
               <span className="helper"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/maze1.png`} alt=""
               />                                 
            </div>  
            <div className="project-text">
               <h1>Maze Generator Game</h1>
               <p>
                  Perfect maze generator with a controllable charatcter.
               </p>
               <ul>
                  <li>Produces a random perfect maze of dimensions chosen by the user.</li>
                  <li>Spawns a arrow-key controlled character that can navigate the maze and collect coins.</li>
               </ul> 
               <p>Technical details:</p> 
               <ul>
                  <li>Maze generated using depth first search + a recursive backtracker.</li>
                  <li>Developed in the Unity game engine and coded in C#.</li>
               </ul>
               <a href="https://github.com/Mt-Rasmus/MazeGeneratorGame">
                  <button className="button">Source code</button>
               </a>               
            </div>

         </div>
         <TechStack tech={techStack} index={props.index}/> 
      </div>
   )
}

export { MazeGenerator as default }