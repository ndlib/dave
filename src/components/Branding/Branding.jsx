'use strict'
import React, { Component } from 'react'
import { logo } from '../../configuration/variables.js'
import classes from './Branding.scss'

class Branding extends Component {

  render () {
    return (
      <div className={classes.branding}>
        <a href='http://library.nd.edu'>
          <img src={logo} />
        </a>
      </div>
     )
  }
}

export default Branding
