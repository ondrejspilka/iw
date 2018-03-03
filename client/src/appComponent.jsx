import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {BrowserRouter,Route,Router,Link,withRouter}  from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import Logout from './components/Logout.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';
import About from './containers/About.jsx';
import MasterPage from './containers/MasterPage.jsx';


class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    
    render() {
        return(
            <BrowserRouter>
            <MasterPage>
            <Route path="/about" component={About}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/logout" component={Logout}/>
            
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/" exact={true} component={HomePage}/>
            </MasterPage>
            </BrowserRouter>
        )
    }

}

App.propTypes = {
}

export default App;