import React, { useState } from 'react';
import PortfolioContext from '../context/portfolio-context';
import Header from './Header';

const MainPage = () => {

   //const [city, setCity] = useState('');

   return (
      // the stuff passed down in "value" are the states we want to share INSIDE the context
      <PortfolioContext.Provider> 
         <Header />
      </PortfolioContext.Provider>
   );
}

export { MainPage as default }