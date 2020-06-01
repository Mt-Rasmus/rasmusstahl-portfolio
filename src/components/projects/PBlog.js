
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
            <div className="site-web-container">
               <img 
                  className="site-web"
                  src={`/images/projects/pBlog2.png`} alt=""
               />              
            </div>
         </div>
         <div>
         <p>Tech:</p>
            <div>
               <div><p>JavaScript</p></div>
               <div><p>CSS3</p></div>
               <div><p>HTML5</p></div>
            </div>
         </div>         
      </div>
   )
}

export { PBlog as default }