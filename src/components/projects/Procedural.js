

import React from 'react';
import TechStack from '../TechStack';

const Procedural = (props) => {
   const techStack = ["javascript", "css3", "html5", "webgl"];
   return (
      <div className="content-container content-container--project box-slant box-slant__2">
         <div className="content-align-sbs content-align-sbs--project content-align-sbs--project--left">
            <div className="img-container-project img-container-project--left">
               <span className="helper"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/procedural1.png`} alt=""
               />                                 
            </div>  
            <div className="project-text">
               <h1>Procedural Animal Skin</h1>
               <p>
                  Reproducing animal skin using procedural methods.
               </p>
               <ul>
                  <li>WebGL application that produces animal (elephant) skin texture using procedural methods.</li>
                  <li>Procedural methods used: Worley/Cellular Noise and Perlin Noise.</li>
                  <li>Use mouse click and drag to rotate textured sphere.</li>
               </ul> 
               <p>Technical details:</p> 
               <ul>
                  <li>THREE.js with WebGL used for 3D programming.</li>
                  <li>Vertex and Fragment shaders written in glsl (OpenGL Shading Language)</li>
               </ul>
               <a href="https://mt-rasmus.github.io/Procedural-Animal-Skin">
                  <button className="button">Visit site</button>
               </a>
               <a href="https://github.com/Mt-Rasmus/Procedural-Animal-Skin">
                  <button className="button">Source code</button>
               </a>               
            </div>

         </div>
         <TechStack tech={techStack} index={props.index}/> 
      </div>
   )
}

export { Procedural as default }