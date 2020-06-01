
import React from 'react';
import PBlog from './projects/PBlog';
import Backstory from './projects/Backstory';
import ThaWeather from './projects/ThaWeather';

const Projects = () => {
   return (
      <div>
      <div className="content-container">
         <h1 >
            Projects
         </h1>
         <p>All projects below are personal solo projects, unless stated otherwise.</p>
      </div>
         <PBlog />
         <Backstory />
         <ThaWeather />
      </div>
   )
}

export { Projects as default }