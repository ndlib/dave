'use strict'
import React, { Component, PropTypes } from 'react'
import NavigationButton from '../NavigationButton/'
import classes from './OpenSeaDragonPrevNext.scss'
import { colors } from '../../configuration/variables.js'

import linkBuilder from '../../modules/linkBuilder.js'

class OpenSeaDragonPrevNext extends Component {

  constructor (props) {
    super(props)
    this._links = linkBuilder(this.props.data, this.props.params, 1)
  }

  componentWillUpdate (nextProps, nextState) {
    this._links = linkBuilder(nextProps.data, nextProps.params, 1)
  }
  buttonColor () {
    return {backgroundColor: colors.background1}
  }
  render () {
    return (
      <div className={classes.navigationOuterWrapper}>
        <div
          className={classes.leftNav}
          style={this.buttonColor()}
        >
          <NavigationButton
            data={this.props.data}
            params={this.props.params}
            target={this._links.prevPage}
            icon={'navigate_before'}
          />
        </div>
        <div
          className={classes.rightNav}
          style={this.buttonColor()}
        >
          <NavigationButton
            data={this.props.data}
            params={this.props.params}
            target={this._links.nextPage}
            icon={'navigate_next'}
          />
        </div>
      </div>
     )
  }
}

OpenSeaDragonPrevNext.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default OpenSeaDragonPrevNext
