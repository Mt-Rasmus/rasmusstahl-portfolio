
import React from 'react';
import PBlog from './projects/PBlog';
import Backstory from './projects/Backstory';
import ThaWeather from './projects/ThaWeather';
import ClimateViz from './projects/ClimateViz';
import Piano from './projects/Piano';
import Procedural from './projects/Procedural';
import NEAT from './projects/NEAT';
import FaceRecognition from './projects/FaceRecognition';
import RobBotman from './projects/RobBotman';
import MazaGenerator from './projects/MazaGenerator';
import VAST from './projects/VAST';

const Projects = () => {
   let index = -1;
   return (
      <div className="content-container-parent">
         <div className="content-container">
            <h1 className="pagetitle">
               Projects
            </h1>
            <p style={{margin: "0 0 40px 0", fontSize: "1.7rem" }}>All projects below are personal solo projects, unless stated otherwise.</p>
         </div>
         <PBlog index={index++}/>
         <Backstory index={index++} />
         <ThaWeather index={index++} />
         <Piano index={index++} />
         <ClimateViz index={index++} />
         <Procedural index={index++} />
         <NEAT index={index++} />
         <FaceRecognition index={index++} />
         <RobBotman index={index++} />
         <MazaGenerator index={index++} />
         <VAST index={index++} />
      </div>
   )
}

export { Projects as default }