
import React from 'react';
import TechStack from '../TechStack';

const ThaWeather = (props) => {
   const techStack = ["javascript", "css3", "html5", "react", "webpack", "git"];
   return (
      <div className="content-container content-container--project">
         <h1>Tha weather</h1>
         <div className="content-align-sbs content-align-sbs--project">
            <div className="project-text">
               <p>
                  Tha Weather is a simple weather app.<br/>
               </p>
                  <ul>
                     <li>Shows weather report for a user picked location. </li>
                     <li>Shows the weather at different timestamps during the day. </li>
                     <li>Includes a four day forecast as well. </li>
                  </ul>
                  <p>Technical details:</p> 
                  <ul>
                     <li>Fetching data from OpenWeatherAPI</li>
                     <li>State management: React </li>
                     <li>d3.js used to create animated line graph</li>
                     <li>Responsive design. </li>
                  </ul>       
            </div>
            <div className="img-container-project ">
               <span className="helper"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/weather1.png`} alt=""
               />          
            </div>         
         </div>
         <TechStack tech={techStack} index={props.index}/> 
      </div>
   )
}

export { ThaWeather as default }