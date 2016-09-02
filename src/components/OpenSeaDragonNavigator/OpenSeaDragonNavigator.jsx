'use strict'
import React, { Component } from 'react'
import classes from './OpenSeaDragonNavigator.scss'

class OpenSeaDragonNavigator extends Component {

  render () {
    return (
      <div className={classes.wrapper}>
        <div className={classes.navigator} id='navigator' />
      </div>
     )
  }
}

export default OpenSeaDragonNavigator
