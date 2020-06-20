
import React from 'react';
import TechStack from '../TechStack';

const Piano = (props) => {
   const techStack = ["javascript", "css3", "html5", "webgl"];
   return (
      <div className="content-container content-container--project box-slant">
         <div className="content-align-sbs content-align-sbs--project content-align-sbs--project--left">
            <div className="img-container-project img-container-project--left">
               <span className="helper"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/piano1.png`} alt=""
               />                                 
            </div>  
            <div className="project-text">
               <h1>Notes 3D</h1>
               <p>
                  Bachelor Thesis research and development project.
               </p>
               <ul>
                  <li>Developed a web-based piano game with MIDI-keyboard controls.</li>
                  <li>The player gains points by playing the chosen song as perfectly as possible</li>                  
                  <li>Steroscoping 3D rendering requiring user to wear 3D glasses.</li>
                  <li>Collaboration with 5 other students.</li>
               </ul> 
               <p>Technical details:</p> 
               <ul>
                  <li>THREE.js used for 3D programming.</li>
                  <li>WebMIDI.js used to read MIDI input</li>
                  <li>MIDI.js used to to process and play sound as soundfonts.</li>
                  <li>Requires a 3D projector mounted over keyboard, projecting onto the board.</li>
               </ul>
               <a href="https://www.youtube.com/watch?v=cZj-vUDJ-ao">
                  <button className="button">Video Demo</button>
               </a>
            </div>

         </div>
         <TechStack tech={techStack} index={props.index}/> 
      </div>
   )
}

export { Piano as default }