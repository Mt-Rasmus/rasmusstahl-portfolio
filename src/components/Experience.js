import React from 'react';
import TechStack from './TechStack';

const Experience = () => {
   const techStackUniface = ["cplusplus", "git", "jenkins", "javascript"];
   const techStackSICK = ["lua", "subversion"];
   const index = 0;
   return (
      <div className="content-container">
         <div className="head-line-container">
            <h1 className="page-title head-line head-line__page-title">Experience</h1>         
         </div>
         <br></br><br></br><br></br>
         <div className="head-line-container">
            <h3 className="head-line">Work experience:</h3>
         </div>
         <div className="exp-grid">
            <div>Aug 2019–Present:</div>
            <div className="span-two">
               <p style={{margin: "0"}}><strong>Software Developer</strong>, <i>Uniface BV</i>, Amsterdam, The Netherlands.</p> 
               Fulltime software development job. I am part of a scrum team taking on tasks including
               development of new features, maintenance, bug fixing, writing tests and documentation, etc.
               Coding mainly in C++, with some JavaScript and Uniface’s own scripting language called Proc
               Script. Version control: Git, CI: Jenkinks.
               <TechStack tech={techStackUniface} index={index}/>               
               </div>
            <div>Jun-Aug 2018:</div>
            <div className="span-two">
               <p style={{margin: "0"}}><strong>Software Developer</strong>, <i>SICK IVP</i>, Linköping, Sweden.</p> 
               Summer job at SICK IVP in Linköping. SICK is a company that develops 2D and 3D Machine
               Vision camera hardware and software. My work included developing 2D machine vision user
               applications in Lua for image processing and analysis.
               <TechStack tech={techStackSICK} index={index}/>   
            </div>
            <div>Oct 2010–Aug 2013, summers 2016 and 2017:</div>
            <div className="span-two">
               <p style={{margin: "0"}}><strong>Customer Service Agent</strong>, <i>Telenor Sverige AB</i>, Kalmar, Sweden.</p> 
               I was a customer service worker at a major telecom company in Sweden called Telenor. My
               work tasks included receiving calls from customers, whom I provided with service and help with
               various problems. Also selling subscriptions to current and potential customers.
            </div>
         </div>
         <br></br>
      </div>
   )
}

export { Experience as default }