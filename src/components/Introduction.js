
import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {

   return (
      <div className="content-container">
         <h1>Hi,</h1>
         <h3>My name is Rasmus,</h3>
         <p>I'm a Software Engineer.</p>
         <br></br>
         <br></br>
         <Link to="/projects">
            <button className="button">Projects</button>
         </Link>  
      </div>
   )
}

export { Introduction as default }