
import React from 'react';
import TechStack from '../TechStack';

const ClimateViz = (props) => {
   const techStack = ["csharp", "unity"];
   return (
      <div className="content-container content-container--project">
         <div className="content-align-sbs content-align-sbs--project">
            <div className="project-text project-text__left">
               <h1>Climate Change Visualization</h1>
               <p>
                  Master Thesis research and development project.
               </p>
               <ul>
                  <li>The end result of the project was a 3D VR climate visualization 
                  tool for the HTC Vive.</li>
                  <li>The project involved creating a full user application experience, researching and applying
                  ways to show the effects of climate change on a city and creating an immersive and intuitive
                  user interface/experience. </li>
                  <li>Extensive UX research was done to optimize user experience for VR and 3D visualization, combined with user tests and refectoring.</li>
                  <li>Research was also done on different climate change factors like erosion, so that it could be visualized and interacted with.</li>
                  <li>Data was collected from several research institutions like SMHI, and consisted mainly of GIS and raster data. </li>
                  <li>Collaboration with one other student.</li>
               </ul> 
               <p>Technical details:</p> 
               <ul>
                  <li>GIS data used to map out polygon shapes (buildings, waterline, etc.)</li>
                  <li>Raster data used for terrain height maps.</li>
               </ul>
               <a href="https://drive.google.com/file/d/1fACP4ZPHmgQJiwhtJfxw7-6F22gU8S9G/view">
                  <button className="button">Video Demo</button>
               </a>  
            </div>
            <div className="img-container-project">
               <span className="helper helper__double"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/climate1.png`} alt=""
               />
               <img 
                  className="img-project"
                  src={`/images/projects/climate2.png`} alt=""
               />                                    
            </div>  
         </div>
         <TechStack tech={techStack} index={props.index}/> 
      </div>
   )
}

export { ClimateViz as default }