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
    const canvasId = parseInt(this.props.params.canvasId)
    const sequence = parseInt(this.props.params.sequence)
    const canvases = this.props.data.sequences[sequence].canvases
    const offsetPercent = canvasId / canvases.length * 0.5
    scrollbars.scrollLeft(scrollbars.getScrollWidth() * offsetPercent)
  }

  componentDidMount () {
    this.centerCurrent()
  }

  componentDidUpdate () {
    this.centerCurrent()
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
          style={{overflowY: 'hidden'}}
        >
          {drawerImages(this.props.data, this.props.params)}
        </SpringScrollbars>
        <button
          className={classes.clickButton + ' ' + classes.left}
          onClick={this.handleClickBack}>
          <FontIcon className='material-icons'>chevron_left</FontIcon>
        </button>
        <button
          className={classes.clickButton + ' ' + classes.right}
          onClick={this.handleClickForward}>
          <FontIcon className='material-icons'>chevron_right</FontIcon>
        </button>
      </div>
    )
  }
}

Drawer.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default Drawer
