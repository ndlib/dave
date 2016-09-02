'use strict'
import React, { Component } from 'react'
import MobileDetect from 'mobile-detect'
import classes from './OpenSeaDragonNavigator.scss'

class OpenSeaDragonNavigator extends Component {

  constructor (props) {
    super(props)
    let _mobileDetect = new MobileDetect(navigator.userAgent)
    this._mobile = _mobileDetect.mobile()
  }

  render () {
    if (this._mobile) {
      return null
    }

    return (
      <div className={classes.wrapper}>
        <div className={classes.navigator} id='navigator' />
      </div>
     )
  }
}

export default OpenSeaDragonNavigator
