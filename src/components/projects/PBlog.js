
import React from 'react';

const PBlog = () => {

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
                     <li>Log into your personal page with Google. </li>
                     <li>Write blog posts and save them on your personal page. </li>
                     <li>Edit your posts whenever you want. </li>
                     <li>Share your posts with whoever you like. </li>
                  </ul>
                  <p>
                     Technical details:
                  </p> 
                  <ul>
                     <li>Firebase used for authentication and storing/fetching individual user data (blog posts). </li>
                     <li>Responsive design. </li>
                  </ul>                     
            </div>
            <div className="img-container-project">
               <span className="helper"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/pBlog2.png`} alt=""
               />                             
            </div>
         </div>
         <div>
         <p>Tech:</p>
            <div className="content-align-sbs content-align-sbs--wrap">
               <div className="content-align-sbs tech-icon-container">
                  <img 
                     className="tech-icon"
                     src={`/images/tech/javascript.svg`} alt=""
                  />   
                  <p className="tech-name">JavaScript</p>
               </div>
               <div className="content-align-sbs tech-icon-container">
                  <img 
                     className="tech-icon"
                     style={{color: "red"}}
                     src={`/images/tech/css3.svg `} alt=""
                  />                
                  <p className="tech-name">CSS3</p>
               </div>
               <div className="content-align-sbs tech-icon-container">
                  <img 
                     className="tech-icon"
                     src={`/images/tech/html5.svg`} alt=""
                  />                
                  <p className="tech-name">HTML5</p>
               </div>
               <div className="content-align-sbs tech-icon-container">
                  <img 
                     className="tech-icon"
                     src={`/images/tech/react.svg`} alt=""
                  />                
                  <p className="tech-name">React</p>
               </div>
               <div className="content-align-sbs tech-icon-container">
                  <img 
                     className="tech-icon"
                     src={`/images/tech/redux.svg`} alt=""
                  />                
                  <p className="tech-name">Redux</p>
               </div>  
               <div className="content-align-sbs tech-icon-container">
                  <img 
                     className="tech-icon"
                     src={`/images/tech/firebase.svg`} alt=""
                  />                
                  <p className="tech-name">Firebase</p>
               </div> 
               <div className="content-align-sbs tech-icon-container">
                  <img 
                     className="tech-icon"
                     src={`/images/tech/webpack.svg`} alt=""
                  />                
                  <p className="tech-name">Webpack</p>
               </div>   
               <div className="content-align-sbs tech-icon-container">
                  <img 
                     className="tech-icon"
                     src={`/images/tech/git.svg`} alt=""
                  />                
                  <p className="tech-name">Git</p>
               </div>                                                                          
            </div>
         </div>         
      </div>
   )
}

export { PBlog as default }