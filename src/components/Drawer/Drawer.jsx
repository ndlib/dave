'use strict'
import React, { Component, PropTypes } from 'react'
import { FontIcon } from 'material-ui'
import SpringScrollbars from '../SpringScrollbars'
import drawerImages from './modules/drawerImages.js'
import classes from './Drawer.scss'
import style from './modules/style.js'

class Drawer extends Component {

  constructor (props) {
    super(props)
    this.handleClickForward = this.handleClickForward.bind(this)
    this.handleClickBack = this.handleClickBack.bind(this)
    this.centerCurrent = this.centerCurrent.bind(this)
  }

  componentDidMount () {
    this.centerCurrent()
  }

  componentDidUpdate () {
    this.centerCurrent()
  }

  render () {
    // Do not render on mobile on for grid view.
    if (this.props.params.view === 'g') {
      return null
    }

    return (
      <div className={classes.wrapper}>
        <SpringScrollbars
          ref='scrollbars'
          autoHide
          style={style.scrollBar()}
        >
          {drawerImages(this.props.data, this.props.params)}
        </SpringScrollbars>
        <button
          className={classes.clickButton + ' ' + classes.left}
          onClick={this.handleClickBack}>
          <FontIcon className='material-icons' style={style.buttonIcon()}>chevron_left</FontIcon>
        </button>
        <button
          className={classes.clickButton + ' ' + classes.right}
          onClick={this.handleClickForward}>
          <FontIcon className='material-icons' style={style.buttonIcon()}>chevron_right</FontIcon>
        </button>
      </div>
    )
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

  // Scroll by 60% of window width.
  scrollIncrement () {
    return window.innerWidth * 0.6
  }

  // Attempt to center the current thumbnail. Scrollbar will clamp ends.
  centerCurrent () {
    const { scrollbars } = this.refs
    if (scrollbars) {
      const canvasId = parseInt(this.props.params.canvasId) + 1
      const sequence = parseInt(this.props.params.sequence)
      const canvases = this.props.data.sequences[sequence].canvases
      const offsetPercent = (canvasId / canvases.length)
      scrollbars.scrollLeft((scrollbars.getScrollWidth() * offsetPercent) - (window.innerWidth / 2))
    }
  }
}

Drawer.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default Drawer
