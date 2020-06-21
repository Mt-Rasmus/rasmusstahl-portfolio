
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
   let index = 0;
   return (
      <div className="content-container-parent">
         <div className="content-container">
         <div className="head-line-container">
            <h1 className="page-title head-line head-line__page-title">Projects</h1>         
         </div>
         <br></br><br></br>
            <p style={{margin: "0 0 30px 0", fontSize: "1.6rem" }}>All projects below are personal solo projects, unless stated otherwise.</p>
            <p style={{margin: "0 0 10px 0", fontSize: "1.7rem" }}>Source code to this site: </p>
            <a href="https://github.com/Mt-Rasmus/rasmusstahl-portfolio">
               <button className="button">Source code</button>
            </a>
            <br></br><br></br><br></br>
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