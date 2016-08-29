'use strict'
import React, { Component } from 'react'
import Logo from './assets/library.logo.png'
import classes from './Branding.scss'

class Branding extends Component {

  render () {
    return (
      <div className={classes.branding}>
        <a href='http://library.nd.edu'>
          <img src={Logo} />
        </a>
      </div>
     )
  }
}

export default Branding
