
import React from 'react';
import TechStack from './TechStack';

const About = () => {
   const techStack = ["javascript", "html5", "css3", "sass", "vue", "react", "redux", "php", "laravel", "git"];
   const index = -1;
   return (
      <div className="content-container about">
         <div className="head-line-container">
            <h1 className="page-title head-line head-line__page-title">About me</h1>         
         </div>
         <br></br><br></br>
         <p>I'm a fullstack developer with a passion for developing great user interfaces.</p>
         <p>I like the whole creative spectrum behind creating user applications, 
         from design- to implementation.</p>
         <p><strong>Favourite tech:</strong></p>
         <TechStack tech={techStack} index={index}/>
         <p>Other than the development I do a lot of digital art in my spare time, some of which I include in my software projects.
         Favourite tools: Adobe Photoshop, Adobe Flash/Animate.</p>
         <p>I am originally from Sweden, currently living in Amsterdam.</p>
         <p>In my time off you'll find me hanging out in the park or at a bar in the city with friends,
         or sitting at home tinkering with a website or a digital drawing.</p>
         <p>I also hit the gym once in a while, and go fishing. And yes, they actually do have fish in the Amsterdam waters.</p>
         <br></br>
      </div>
   )
}

export { About as default }