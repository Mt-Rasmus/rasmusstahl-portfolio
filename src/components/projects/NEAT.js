
import React from 'react';
import TechStack from '../TechStack';

const NEAT = (props) => {
   const techStack = ["csharp", "unity"];
   return (
      <div className="content-container content-container--project">
         <div className="content-align-sbs content-align-sbs--project">
            <div className="project-text-container">
               <div className="project-text project-text__left">
                  <h1>A NEAT Driving Simulator</h1>
                  <p>
                     3D simulation of cars learning to drive through a track using the NEAT algorithm.
                  </p>
                  <h3>Algorithm:</h3>
                  <p style={{fontSize: "16px"}}>
                     NEAT (Neural Evolution through Augmenting Topologies) is an algorithm in the area of Neuroevolution (NE), which is the concept of evolving artificial neural networks 
                     using a genetic algorithm. It allows not only for the weights of the networks to be changed, but the topology of the networks themselves, 
                     arguably making the learning process quicker and more effective.
                  </p>

                  <h3>Simulation program:</h3>
                  <p style={{fontSize: "16px"}}>
                     The simulation was done in Unity, coded in C#. The program spawns a number of cars and assigns them each a neural network.
                     The output of the networks inform the throttle and steering angle of each car.
                     The distance from the car and the banks of the track serve as input to the network, 
                     measured by five vectors pretruding at different angles from the front.
                     Each car gets destroyed when hitting a side bank/wall. When all cars have been destroyed, 
                     the newly evolved and surviving networks gets assigned to a whole new batch of cars which will hopefully have learned 
                     something more about driving safely through the track.
                     This process is repeated until the results are safisfying enough.
                  </p>
                  <p style={{fontSize: "16px"}}>Collaboration with one other developer.</p>
                  <a href="https://github.com/Mt-Rasmus/A-NEAT-Driving-Simulator">
                     <button className="button">Source code</button>
                  </a>
               </div>
            </div>
            <div className="img-container-project">
               <span className="helper"></span>
               <img 
                  className="img-project"
                  src={`/images/projects/neat.png`} alt=""
               />                                 
            </div>  
         </div>
         <TechStack tech={techStack} index={props.index}/> 
      </div>
   )
}

export { NEAT as default }