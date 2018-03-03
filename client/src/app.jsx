import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import Router  from 'react-router';
import {BrowserRouter,Route,Link}  from 'react-router-dom';
//import routes from './routes.js';
import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';
import BasicExample from './BasicExample.jsx';
import App from './appComponent.jsx'
import MasterPage from './containers/MasterPage.jsx';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const history = createBrowserHistory()

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
  </MuiThemeProvider>
  ), document.getElementById('react-app')); 