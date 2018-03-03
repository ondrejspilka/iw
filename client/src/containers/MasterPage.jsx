import React from 'react';
import Auth from '../modules/Auth';
import LoginForm from '../components/LoginForm.jsx';
import PropTypes from 'prop-types';
import {Link,NavLink} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, Toolbar, MenuItem, ToolbarGroup } from 'material-ui';

class MasterPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return(<div>
      <Toolbar>
        <MenuItem><Link to="/">Home</Link></MenuItem>
        <ToolbarGroup>
          <MenuItem><Link to="/signup">Signup</Link></MenuItem>
          <MenuItem>{ (Auth.isUserAuthenticated()!==true ) ? <Link to="/login">Login</Link> : (Auth.getUserName())}</MenuItem>
          <MenuItem>{Auth.isUserAuthenticated() && <Link to="/logout">Logout</Link>}</MenuItem>
          <MenuItem><Link to="/about">About </Link></MenuItem>
        </ToolbarGroup>
      </Toolbar>
        {this.props.children}
      </div>
    );
    }
}

MasterPage.propTypes = {
}

export default MasterPage
