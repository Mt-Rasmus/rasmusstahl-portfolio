
import React from 'react';
import { Link } from 'react-router-dom';

const PageList = (props) => {

   return(
      <ul className="list">
         <span className="button-close hide-desktop"></span>
         <li>
            <Link to="/about" className="nav-link" onClick={props.toggleMenu}>
               <div className="head-line-container">
                  <h2 className="list-item">About me</h2>
               </div>
            </Link>
         </li>
         <div className="empty-box"></div>
         <li>             
            <Link to="/projects" className="nav-link" onClick={props.toggleMenu}>
            <div className="head-line-container">
               <h2 className="list-item">Projects</h2>
            </div>
            </Link>            
         </li>
         <div className="empty-box"></div>
         <li>             
            <Link to="/experience" className="nav-link" onClick={props.toggleMenu}>
            <div className="head-line-container">
               <h2 className="list-item">Experience</h2>
            </div>
            </Link>            
         </li>
         <div className="empty-box"></div>
         <li>             
            <Link to="/education" className="nav-link" onClick={props.toggleMenu}>
            <div className="head-line-container">
               <h2 className="list-item">Education</h2>
            </div>
            </Link>            
         </li>
         <div className="empty-box"></div>       
         <li>             
            <a className="nav-link" href={`/pdf/CV_1.pdf`}>
            <div className="head-line-container">
               <h2 className="list-item">CV</h2>
            </div>
            </a>       
         </li>                                    
      </ul>        
   )

}

export { PageList as default }