'use strict'
import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import Swipeable from 'react-swipeable'
import setPage from '../../modules/setPage.js'
import linkBuilder from '../../modules/linkBuilder.js'
import classes from './SwipeArea.scss'

class SwipeArea extends Component {

  constructor (props) {
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.navigate = this.navigate.bind(this)
    this.swipeLeft = this.swipeLeft.bind(this)
    this.swipeRight = this.swipeRight.bind(this)
    this._links = linkBuilder(this.props.data, this.props.params)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress (e) {
    switch (e.keyCode) {
      // left key
      case 37:
        this.navigate(this._links.prevPage)
        break
      // up key
      case 38:
        this.navigate(this._links.firstPage)
        break
      // right key
      case 39:
        this.navigate(this._links.nextPage)
        break
      // down key
      case 40:
        this.navigate(this._links.lastPage)
        break
      default:
        break
    }
  }

  navigate (target) {
    let uri = setPage(this.props.params, target)
    this.context.router.push(uri)
    browserHistory.push(uri)
  }

  swipeLeft (e) {
    this.navigate(this._links.nextPage)
  }

  swipeRight (e) {
    this.navigate(this._links.prevPage)
  }

  render () {
    this._links = linkBuilder(this.props.data, this.props.params)
    return (
      <Swipeable
        onSwipedRight={this.swipeRight}
        onSwipedLeft={this.swipeLeft}
      >
        {this.props.children}
      </Swipeable>
     )
  }
}

SwipeArea.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

SwipeArea.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SwipeArea
