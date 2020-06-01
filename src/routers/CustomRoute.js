
import React from 'react';
import { Route } from 'react-router-dom';

const CustomRoute = ({ component: Component, ...props }) => {
   return (
      <Route {...props} component={(props) => (
            <Component {...props} />
      )}/>
   )
}

export default CustomRoute;