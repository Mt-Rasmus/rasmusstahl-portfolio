
import React from 'react';
import CustomRoute from './CustomRoute';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import CV from '../components/CV';
import NotFoundPage from '../components/NotFoundPage';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'; // needed to access history for non routed components

export const history = createBrowserHistory();

// Note: rendering header in PrivateRoute only
const AppRouter = () => (
   <Router history={history}>
         <Switch> {/* Only the first comp with a matching path to current URL will be rendererd */}     
            <CustomRoute path="/" component={Introduction} exact={true}/> 
            <CustomRoute path="/about" component={About} /> 
            <CustomRoute path="/projects" component={Projects} /> 
            <CustomRoute path="/experience" component={Experience} />
            <CustomRoute path="/cv" component={CV} /> 
            <Route component={NotFoundPage}/>
         </Switch>
   </Router>
);

export default AppRouter;