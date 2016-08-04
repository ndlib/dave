'use strict'
import React, { Component, PropTypes } from 'react'
import Logo from './assets/library.logo.png'
import classes from './Branding.scss'

class Branding extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ classes.branding }>
        <img src={ Logo } />
      </div>
     );
  }
}

export default Branding;
