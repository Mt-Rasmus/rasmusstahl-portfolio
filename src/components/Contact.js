
import React from 'react';

const Contact = () => {
   return (
      <div className="bottom-container">
         <h2 className="show-desktop contact-title">Contact:</h2>
         <div>
            <a href="https://www.linkedin.com/in/rasmus-st%C3%A5hl/">
               <img src="images/contact/linkedin.svg" className="contact-icon"></img>
            </a>
            <a href="https://github.com/Mt-Rasmus">
               <img src="images/contact/github.svg" className="contact-icon"></img>
            </a>
            <a href="mailto: rasmus.stahl.47@gmail.com">
               <img src="images/contact/gmail.svg" className="contact-icon"></img>
            </a>
         </div>         
      </div>
   )
}

export { Contact as default }