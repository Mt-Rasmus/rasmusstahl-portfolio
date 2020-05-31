
import React, {useState, useEffect} from 'react';
import Contact from './Contact';
import PageList from './PageList';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

   const [showMenu, setShowMenu] = useState(false);
   const mql = window.matchMedia("(min-width: 45rem)");
   const showMenuHandler = e => (e.matches && showMenu) && setShowMenu(!showMenu);

   useEffect(() => {
      // hide sliding menu when going back to small screen
      mql.addListener(showMenuHandler);
      return () => mql.removeListener(showMenuHandler);
   }, [showMenu,showMenuHandler,mql])

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
            <nav>
               <div className="show-mobile">
                  <img 
                     src="images/ham.svg" 
                     alt="toggle menu"
                     onClick={() => setShowMenu(!showMenu)}
                  />
                  {(showMenu) && <div 
                     className="slider" 
                     id="slider"
                  > 
                     <PageList /> 
                  </div>}     
               </div>
               <span className="show-desktop">
                  <PageList />   
               </span>  
            </nav>
            <Contact />
         </div>
      </div>
   )
}

export { NavigationBar as default }