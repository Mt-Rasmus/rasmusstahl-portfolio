
import React, {useState, useEffect} from 'react';
const TechStack = (props) => {

   const [visible, setVisible] = useState(false);

   const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
         (entry.target.id === `techDiv${props.index}` && entry.isIntersecting) && setVisible(entry.isIntersecting);
      })
   }

   const pngImages = ["vue", "vuex", "nuxt", "php", "laravel" ];

   useEffect(() => {
      const techDiv = document.getElementById(`techDiv${props.index}`);
      let options = {
         root: null,
         rootMargin: '0px',
         threshold: 0.85
      }
      const observer = new IntersectionObserver(intersectionCallback, options);
      observer.observe(techDiv);
   }, [intersectionCallback, props.index])

   const getTechTitle = (name) => {
      switch(name) {
         case "javascript": return 'JavaScript';
         case "html5": return 'HTML5';
         case "css3": return 'CSS3';
         case "sass": return 'SASS';
         case "react": return 'React';
         case "redux": return 'Redux';
         case "vue": return 'Vue / Vuex';
         case "nuxt": return 'Nuxt';
         case "php": return 'PHP';
         case "laravel": return 'Laravel';
         case "firebase": return 'Firebase';
         case "webpack": return 'Webpack';
         case "git": return 'Git';
         case "csharp": return 'C#';
         case "unity": return 'Unity';
         case "webgl": return 'WebGL';
         case "threejs": return 'Three.js';
         case "d3-js": return 'D3.js';
         case "matlab": return 'Matlab';
         case "cplusplus": return 'C++';
         case "lua": return "Lua";
         case "subversion": return "SVN";
         case "jenkins": return "Jenkins";
         default: return "not found"
      }
   }

   return (
      <div>  
         {props.index >= 0 && <p className="tech-header-title">Tech Stack:</p>}
         <div className="content-align-sbs content-align-sbs--wrap tech-div" id={`techDiv${props.index}`}>
         {props.tech.map((element, index) => {
               return (
                  <div key={index} className="content-align-sbs tech-icon-container ">
                     {visible ?
                     <img 
                        className="tech-icon"
                        src={`/images/tech/${element}.${pngImages.includes(element) ? 'png' : 'svg'}`} 
                        alt=""
                        height= "32px" width="42px"
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