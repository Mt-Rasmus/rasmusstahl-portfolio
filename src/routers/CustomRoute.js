
import React from 'react';
import { Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const CustomRoute = ({ component: Component, ...props }) => {
   return (
      <Route {...props} component={(props) => (
         <div className="content-container-main">
            <NavigationBar/>  
            <Component {...props} />
         </div>
      )}/>
   )
}

export default CustomRoute;