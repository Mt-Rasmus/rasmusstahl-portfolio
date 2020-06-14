
import React, {useState, useEffect} from 'react';
import Contact from './Contact';
import PageList from './PageList';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

   const [showMenu, setShowMenu] = useState(false);
   const mql = window.matchMedia("(min-width: 45rem)");
   const showMenuHandler = e => (e.matches && showMenu) && setShowMenu(!showMenu);

   const toggleMenu = () => {
      setShowMenu(!showMenu)
   }

   useEffect(() => {
      // hide sliding menu when going back to small screen
      mql.addListener(showMenuHandler);
      return () => mql.removeListener(showMenuHandler);
   }, [showMenu,showMenuHandler,mql])

   return (
      <div>
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
                  <p className="subtitle">Software Engineer</p>
               </div>
               <hr className="show-mobile"></hr>
               <nav>
                  <div className="show-mobile">
                     <div className="icon-container">
                        <div>
                           <Contact />   
                        </div>                      
                        <img
                           className="hamburger-menu"
                           src="images/ham.svg" 
                           alt="toggle menu"
                           onClick={() => setShowMenu(!showMenu)}
                        />
                     </div>
                  </div>
                  <span className="show-desktop">
                     <PageList />   
                  </span>  
               </nav>
               <span className="show-desktop">
                  <Contact />   
               </span> 
            </div>
         </div>
         {(showMenu) && 
            <div 
               className="slider" 
            > 
               <PageList toggleMenu={toggleMenu} /> 
            </div>}            
         <div className="navbar-space-filler"></div>              
      </div>
   )
}

export { NavigationBar as default }