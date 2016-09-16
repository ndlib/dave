'use strict'
import React, { Component, PropTypes } from 'react'
import { FontIcon } from 'material-ui'
import MobileDetect from 'mobile-detect'
import SpringScrollbars from 'react-custom-scrollbars'
import drawerImages from './modules/drawerImages.js'
import classes from './Drawer.scss'

class Drawer extends Component {

  constructor (props) {
    super(props)
    let _mobileDetect = new MobileDetect(navigator.userAgent)
    this._mobile = _mobileDetect.mobile()
    this.handleClickForward = this.handleClickForward.bind(this)
    this.handleClickBack = this.handleClickBack.bind(this)
    this.centerCurrent = this.centerCurrent.bind(this)
  }

  handleClickForward () {
    const { scrollbars } = this.refs
    const position = scrollbars.getScrollLeft()
    scrollbars.scrollLeft(position + this.scrollIncrement())
  }

  handleClickBack () {
    const { scrollbars } = this.refs
    const position = scrollbars.getScrollLeft()
    scrollbars.scrollLeft(position - this.scrollIncrement())
  }

  scrollIncrement () {
    return window.innerWidth * 0.6
  }

  centerCurrent () {
    const { scrollbars } = this.refs
    const canvasId = parseInt(this.props.params.canvasId) + 1
    const sequence = parseInt(this.props.params.sequence)
    const canvases = this.props.data.sequences[sequence].canvases
    const offsetPercent = (canvasId / canvases.length)
    scrollbars.scrollLeft((scrollbars.getScrollWidth() * offsetPercent) - (window.innerWidth / 2))
  }

  componentDidMount () {
    this.centerCurrent()
  }

  componentDidUpdate () {
    this.centerCurrent()
  }

  buttonIconStyle () {
    return {
      margin: 0,
      padding: 0,
      textAlign: 'center',
      verticalAlign: 'middle',
      width: '100%'
    }
  }

  render () {
    if (this.props.params.view === 'g' || this._mobile) {
      return null
    }

    return (
      <div className={classes.wrapper}>
        <SpringScrollbars
          ref='scrollbars'
          autoHide
          style={{overflowY: 'hidden', width: 'calc(100vw - 80px)', margin: '0 auto'}}
        >
          {drawerImages(this.props.data, this.props.params)}
        </SpringScrollbars>
        <div
          className={classes.clickButton + ' ' + classes.left}
          onClick={this.handleClickBack}>
          <FontIcon className='material-icons' style={this.buttonIconStyle()}>chevron_left</FontIcon>
        </div>
        <div
          className={classes.clickButton + ' ' + classes.right}
          onClick={this.handleClickForward}>
          <FontIcon className='material-icons' style={this.buttonIconStyle()}>chevron_right</FontIcon>
        </div>
      </div>
    )
  }
}

Drawer.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default Drawer
