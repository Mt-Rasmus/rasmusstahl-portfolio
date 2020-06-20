
import React from 'react';
import TechStack from '../TechStack';

const FaceRecognition = (props) => {
   const techStack = ["matlab"];
   return (
      <div className="content-container content-container--project box-slant">
         <div className="content-align-sbs content-align-sbs--project content-align-sbs--project--left">
            <div className="img-container-project img-container-project--left">
               <span className="helper helper__double-wfigcap"></span>
               <figure style={{margin: "0"}}>
                  <img 
                  className="img-project"
                  src={`/images/projects/face1.png`} width="1020" height="617" alt=""
                  />
                  <figcaption>Using a color map with the YCbCr color space model for mouth detection. </figcaption>
               </figure>
               <figure style={{margin: "0"}}>
                  <img 
                  className="img-project"
                  src={`/images/projects/face2.png`} width="1020" height="617" alt=""
                  />
                  <figcaption>Some eigenfaces produced from testset.</figcaption>
               </figure>                               
            </div>  
            <div className="project-text">
               <h1>Facial Recognition</h1>
               <p>
                  Bachelor Thesis research and development project.
               </p>
               <ul>
                  <li>Developed a face recognition application in MATLAB that detects and recognizes the face in
                  an image from a given database.</li>
                  <li>Implementation included algorithms for eye- and mouth detection and PCA (Principal Component Analysis).</li>  
                  <li>Collaboration with three other developers.</li>                  
               </ul> 
               <p>Technical details:</p>
               <p>PCA is a statistical approach used for
               reducing the number of variables in face recognition. In
               PCA, every image in the training set is represented as a
               linear combination of weighted eigenvectors called
               eigenfaces. These eigenvectors are obtained from
               covariance matrix of a training image set. The weights are
               extracted after selecting a set of the most relevant Eigenfaces.
               Facial recognition is then performed by projecting a test image onto
               the subspace spanned by the eigenfaces. Classification is
               done by measuring minimum Euclidea distance between them.</p>
               <a href="https://github.com/Mt-Rasmus/facial-recognition">
                  <button className="button">Source code</button>
               </a>
            </div>

         </div>
         <TechStack tech={techStack} index={props.index}/> 
      </div>
   )
}

export { FaceRecognition as default }