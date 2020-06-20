
import React from 'react';
import TechStack from '../TechStack';

const VAST = (props) => {
   const techStack = ["matlab", "html5", "css3", "javascript", "d3-js"];
   return (
      <div className="content-container content-container--project">
         <div className="content-align-sbs content-align-sbs--project">
            <div className="project-text project-text__left">
               <h1>2014 VAST Challenge.</h1>
               <p>
                  Visual data analysis and data mining challenge.
               </p>
               <p>
                  The Visual Analytics Science and Technology (VAST) Challenge is an annual contest with
                  the goal of advancing the field of visual data analytics. I did one of challenges as part
                  of a course in advanced visual data analysis.               
               </p>
               <p>
                  The challenge was based on a fictitious scenario involving the disappearance of several employees working 
                  at a fictitious company. 
                  Vast amounts of gps tracking data, GIS data and other data sets was used in order find correlations
                  in data associated with the employees. The data included history of location data, spatial, credit- and loyalty card purchase data.
                  The data was then analysed through numerical analysis, such as clustering, and also visual analysis through plotting
                  gps movements etc.
                  The designed programs were able to reveal several unsual patterns/correlations.
                  Collaboration with one other developer.       
               </p>
               <p>Technical details:</p> 
               <ul>
                  <li>The DBScan algorithm used for clustering .</li>
                  <li>Line and scatterplots among other used for visual data analysis</li>
                  <li>Tech used include Matlab as well as HTML, Javascript + d3.js.  </li>
               </ul>             
               <a href="https://github.com/Mt-Rasmus/TNM098/tree/master/Project">
                  <button className="button">Source code</button>
               </a>             
            </div>
            <div className="img-container-project">
               <span className="helper helper__double"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/vast1.png`} width="1020" height="617" alt=""
               />
               <img 
                  className="img-project"
                  src={`/images/projects/vast2.png`} width="1020" height="617" alt=""
               />                                            
            </div>
         </div>
         <TechStack tech={techStack} index={props.index}/> 
      </div>
   )
}

export { VAST as default }