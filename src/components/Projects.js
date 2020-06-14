
import React from 'react';
import PBlog from './projects/PBlog';
import Backstory from './projects/Backstory';
import ThaWeather from './projects/ThaWeather';
import ClimateViz from './projects/ClimateViz';

const Projects = () => {
   let index = -1;
   return (
      <div className="content-container-parent">
         <div className="content-container">
            <h1 className="pagetitle">
               Projects
            </h1>
            <p>All projects below are personal solo projects, unless stated otherwise.</p>
         </div>
         <PBlog index={index++}/>
         <Backstory index={index++} />
         <ThaWeather index={index++} />
         <ClimateViz index={index++} />
      </div>
   )
}

export { Projects as default }