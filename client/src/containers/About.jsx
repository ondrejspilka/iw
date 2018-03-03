import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';



class About extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }
 
    render() {
      return (<div><h2>About</h2></div>)
    }
}

About.propTypes = {
}

export default  About