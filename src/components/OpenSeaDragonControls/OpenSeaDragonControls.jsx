'use strict'
import React, { Component } from 'react'
import MobileDetect from 'mobile-detect'
import OpenSeaDragonButton from '../OpenSeaDragonButton/'
import classes from './OpenSeaDragonControls.scss'

class OpenSeaDragonControls extends Component {

  constructor (props) {
    super(props)
    let _mobileDetect = new MobileDetect(window.navigator.userAgent)
    // mobile() will return null for desktop browsers or a string for mobile devices
    this._mobile = _mobileDetect.mobile()
    this.desktopOnlyButtons = this.desktopOnlyButtons.bind(this)
  }

  desktopOnlyButtons () {
    // Hide rotation & full screen buttons on mobile
    if (this._mobile) {
      return null
    }

    let buttons = []
    buttons.push(<OpenSeaDragonButton id='rotate-left' icon='rotate_left' key='l' />)
    buttons.push(<OpenSeaDragonButton id='rotate-right' icon='rotate_right' key='r' />)
    buttons.push(<OpenSeaDragonButton id='full-page' icon='fullscreen' key='f' />)
    return buttons
  }

  render () {
    return (
      <ul className={classes.controls}>
        <OpenSeaDragonButton id='zoom-in' icon='zoom_in' />
        <OpenSeaDragonButton id='zoom-out' icon='zoom_out' />
        <OpenSeaDragonButton id='reset' icon='find_replace' />
        {this.desktopOnlyButtons()}
      </ul>
     )
  }
}

export default OpenSeaDragonControls
