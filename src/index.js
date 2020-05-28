import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//import MainPage from './components/MainPage';
import AppRouter, {history} from './routers/AppRouter';
import './styles/styles.scss';

//ReactDOM.render(<MainPage />, document.getElementById('root'));
ReactDOM.render(<AppRouter />, document.getElementById('root'));

serviceWorker.unregister();

history.push('/');
