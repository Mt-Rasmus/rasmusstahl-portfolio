
import React from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
   return (
      <div className="navigation-bar">
         <div className="content-container-nav">
            <div className="avatar-container">
               <div className="avatar-container-sub">
               <Link to="/" className="nav-link">
                  <img 
                     className="avatar"
                     src={`/images/photo2.png`} alt=""
                  />
               </Link>
               </div>
            </div>
            <div className="text-container">
               <h2 className="title">Rasmus Ståhl</h2>
               <p className="subtitle">Software Developer</p>
            </div>
            <div>
               <ul className="list">
                  <li>
                     <Link to="/about" className="nav-link">
                        <h2 className="list-item">About me</h2>
                     </Link> 
                  </li>    
                  <li>             
                     <Link to="/projects" className="nav-link">
                        <h2 className="list-item">Projects</h2>
                     </Link>            
                  </li>
                  <li>             
                     <Link to="/experience" className="nav-link">
                        <h2 className="list-item">Experience</h2>
                     </Link>            
                  </li>    
                  <li>             
                     <a className="nav-link" href={`/pdf/CV_1.pdf`}>
                        <h2 className="list-item">CV</h2>
                     </a>       
                  </li>                                    
               </ul>
               <Contact />
            </div>

         </div>
      </div>
   )
}

export { NavigationBar as default }