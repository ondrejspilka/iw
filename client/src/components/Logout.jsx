import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import DashboardPage from '../containers/DashboardPage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import { Route, Redirect } from 'react-router-dom';


class Logout extends React.Component {

    /**
     * Class constructor.
     */
    constructor(props, context) {
      
      super(props, context);
      this._context = context;
    }

    
    componentWillMount(nextProps, nextState){
        Auth.deauthenticateUser(); 
        console.log('deauthenticated');
    }

    render() {
      console.log('redirected');
        return (<Redirect to="/" />);
    }
    
}

  Logout.contextTypes = {
  };
  

  export default Logout;