
import React from 'react';
import TechStack from '../TechStack';

const PBlog = (props) => {
   const techStack = ["javascript", "css3", "html5", "react", "redux", "firebase", "webpack", "git"];
   return (
      <div className="content-container content-container--project">
         <h1>pBlogg</h1>
         <div className="content-align-sbs content-align-sbs--project">
            <div className="project-text">
               <p>
                  pBlog is a personal blogsite on the web.<br/><br/>
                  It allows you to:
               </p>
                  <ul>
                     <li>Log into your personal page with Google authentication. </li>
                     <li>Write blog posts and save them on your page. </li>
                     <li>Edit your posts whenever you want. </li>
                     <li>Share your posts with whoever you like. </li>
                  </ul>
                  <p>
                     Technical details:
                  </p> 
                  <ul>
                     <li>Firebase used for authentication and database management. </li>
                     <li>State management: React + Redux. </li>
                     <li>Responsive design. </li>
                  </ul>                     
            </div>
            <div className="img-container-project">
               <span className="helper"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/pBlog2.png`} width="1020" height="617" alt=""
               />                             
            </div>
         </div>
         <TechStack tech={techStack} index={props.index}/>      
      </div>
   )
}

export { PBlog as default }