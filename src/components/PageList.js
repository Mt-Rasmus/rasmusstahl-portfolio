
import React from 'react';
import { Link } from 'react-router-dom';

const PageList = (props) => {

   return(
      <ul className="list">
         <span className="button-close hide-desktop"></span>
         <li>
            <Link to="/about" className="nav-link" onClick={props.toggleMenu}>
               <h2 className="list-item">About me</h2>
            </Link> 
         </li>    
         <li>             
            <Link to="/projects" className="nav-link" onClick={props.toggleMenu}>
               <h2 className="list-item">Projects</h2>
            </Link>            
         </li>
         <li>             
            <Link to="/experience" className="nav-link" onClick={props.toggleMenu}>
               <h2 className="list-item">Experience</h2>
            </Link>            
         </li>    
         <li>             
            <a className="nav-link" href={`/pdf/CV_1.pdf`}>
               <h2 className="list-item">CV</h2>
            </a>       
         </li>                                    
      </ul>        
   )

}

export { PageList as default }