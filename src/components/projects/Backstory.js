
import React from 'react';

const Backstory = () => {

   return (
      <div className="content-container content-container--project box-slant">
         <div className="content-align-sbs content-align-sbs--project content-align-sbs--project--left">
            <div className="img-container-project img-container-project--left">
               <span className="helper"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/backstory.png`} alt=""
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
               </p>
               <p>
                  Note: Illustrations made by me (drawn in Adobe Animate).
               </p>    
            </div>
       
         </div>
      </div>
   )
}

export { Backstory as default }