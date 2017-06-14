import registerServiceWorker from './registerServiceWorker';

//import React
import React from 'react';
import ReactDOM from 'react-dom';

//import Styles
import './styles/index.css';

// //import React Router
// import {BrowserRouter, Route, Switch} from 'react-router-dom';

//import Components
import App from './scripts/components/App';


ReactDOM.render(
  <App />,
  document.getElementById('root'));
registerServiceWorker();
