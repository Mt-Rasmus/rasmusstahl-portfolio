
import React, {useState, useEffect} from 'react';
const TechStack = (props) => {

   const [visible, setVisible] = useState(false);

   const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
         (entry.target.id === `techDiv${props.index}` && entry.isIntersecting) && setVisible(entry.isIntersecting);
      })
   }

   useEffect(() => {
      const techDiv = document.getElementById(`techDiv${props.index}`);
      let options = {
         root: null,
         rootMargin: '0px',
         threshold: 0.85
      }
      const observer = new IntersectionObserver(intersectionCallback, options);
      observer.observe(techDiv);
   }, [])

   const getTechTitle = (name) => {
      switch(name) {
         case "javascript": return 'JavaScript';
         case "css3": return 'CSS3';
         case "html5": return 'HTML5';
         case "react": return 'React';
         case "redux": return 'Redux';
         case "firebase": return 'Firebase';
         case "webpack": return 'Webpack';
         case "git": return 'Git';
         case "csharp": return 'C#';
         case "unity": return 'Unity';
         default: return "not found"
      }
   }

   return (
      <div>  
         <p className="tech-header-title">Tech Stack:</p>
         <div className="content-align-sbs content-align-sbs--wrap techDiv" id={`techDiv${props.index}`}>
         {props.tech.map((element, index) => {
               return (
                  <div key={index} className="content-align-sbs tech-icon-container ">
                     {visible ?
                     <img 
                        className="tech-icon"
                        src={`/images/tech/${element}.svg`} 
                        alt=""
                     /> :
                     <img 
                        style={{opacity: "0"}}
                        alt=""
                        height= "51px" width="42px"
                     />                      
                     }
                  {<p className="tech-name">{getTechTitle(element)}</p> }
               </div>
               )      
         })}
         </div>
      </div>
   )

}

export { TechStack as default  } 