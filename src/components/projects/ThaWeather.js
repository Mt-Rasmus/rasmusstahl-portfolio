import React from 'react';

const ThaWeather = () => {

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
            </div>
            <div className="site-web-container">
               <img 
                  className="site-web"
                  src={`/images/projects/pBlog2.png`} alt=""
               />              
            </div>         
         </div>
      </div>
   )
}

export { ThaWeather as default }