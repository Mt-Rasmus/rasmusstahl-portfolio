import React from 'react';
import TechStack from './TechStack';

const Education = () => {
   const techStackUniface = ["cplusplus", "git", "jenkins", "javascript"];
   const techStackSICK = ["lua", "subversion"];
   const index = 0;
   return (
      <div className="content-container">
         <h1 className="pagetitle">Education</h1>
         <div className="head-line-container">
            <h3 className="head-line">University degrees</h3>
         </div>
         <div className="exp-grid">
            <div>2017–2019:</div>
            <div className="span-two">
               <p style={{margin: "0"}}><strong>Master of Science Degree in Media Technology and Engineering</strong>, 
               <i> Linköpings University</i>, Norrköping/Linköping, Sweden.</p>            
               </div>
            <div>2014–2017:</div>
            <div className="span-two">
               <p style={{margin: "0"}}><strong>Bachelor of Science Degree in Media Technology and Engineering</strong>, 
               <i> Linköpings University</i>, Norrköping/Linköping, Sweden.</p> 
            </div>
         </div>
         <br></br>
         <p>
            Media Technology and Engineering is a kin to Computer Science, 
            with heavy focus on math and software development, with a tilt toward media related areas such as GUI design/development, 
            computer graphics, information visualization, VR, image processing, UX/web design, etc.
         </p>
      </div>
   )
}

export { Education as default }