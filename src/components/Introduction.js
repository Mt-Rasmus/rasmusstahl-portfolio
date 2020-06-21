
import React from 'react';
import { Link } from 'react-router-dom';

const Introduction = () => {

   return (
      <div className="content-container">
         <h1 className="introduction-head-line">Hi,</h1>
         <h2>My name is Rasmus.</h2>
         <p className="p-large">I'm a Software Engineer.</p>
         <br></br>
         <h4>Check out some of my projects:</h4>
         <Link to="/projects">
            <button className="button">Projects</button>
         </Link>  
      </div>
   )
}

export { Introduction as default }