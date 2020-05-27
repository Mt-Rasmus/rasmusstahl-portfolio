
import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
   return (
      <div className="navigation-bar">
         <div className="content-container-nav">
            <div className="avatar-container">
               <div className="avatar-container-sub">
                  <img 
                     className="avatar"
                     src={`/images/photo2.png`} alt=""
                  />
               </div>
            </div>
            <h2>Rasmus Ståhl</h2>
            <p>Software Developer</p>
            <ul className="list">
               <li>
                  <Link to="/introduction" className="nav-link">
                     <h2 className="list-item">Introduction</h2>
                  </Link> 
               </li>    
               <li>             
                  <Link to="/projects" className="nav-link">
                     <h2 className="list-item">Projects</h2>
                  </Link>            
               </li>
            </ul>
            <Contact />
         </div>
      </div>
   )
}

export { NavigationBar as default }