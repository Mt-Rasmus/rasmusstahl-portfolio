
import React from 'react';
import TechStack from '../TechStack';

const PBlog = (props) => {
   const techStack = ["javascript", "html5", "css3", "sass", "react", "redux", "firebase", "webpack", "git"];
   return (
      <div className="content-container content-container--project">
         <div className="content-align-sbs content-align-sbs--project">
            <div className="project-text-container">
               <div className="project-text project-text__left">
                  <h1>pBlogg</h1>
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
                     <a href="https://pblog-app.herokuapp.com">
                        <button className="button">Visit site</button>
                     </a>
                     <a href="https://github.com/Mt-Rasmus/pBlog-React-App">
                        <button className="button">Source code</button>
                     </a>                 
               </div>                 
            </div>
            <div className="img-container-project">
               <span className="helper helper__double"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/pBlog1.png`} width="1020" height="617" alt=""
               />
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