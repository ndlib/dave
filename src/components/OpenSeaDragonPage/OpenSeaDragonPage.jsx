'use strict'
import React, { Component, PropTypes } from 'react'
import OpenSeaDragonToolbar from '../OpenSeaDragonToolbar/'
import OpenSeaDragon from '../OpenSeaDragon/'
import classes from './OpenSeaDragonPage.scss'
import buildOpenSeaDragonImage from './modules/buildOpenSeaDragonImage.js'
import NavigationButton from '../NavigationButton/'
import linkBuilder from '../../modules/linkBuilder.js'

class OpenSeaDragonPage extends Component {

  constructor (props) {
    super(props)
    this._image = buildOpenSeaDragonImage(this.props.data, this.props.params)
    this._links = linkBuilder(this.props.data, this.props.params)
  }

  componentWillUpdate (nextProps, nextState) {
    this._image = buildOpenSeaDragonImage(nextProps.data, nextProps.params)
    this._links = linkBuilder(nextProps.data, nextProps.params)
  }

  render () {
    return (
      <div className={classes.outer}>
        <OpenSeaDragonToolbar image={this._image} />
        <div className={classes.viewer}>
          <OpenSeaDragon
            id='ocd-viewer'
            type='legacy-image-pyramid'
            image={this._image.imageUri}
          />
        </div>
        <div className={classes.navigationOuterWrapper}>
          <div className={classes.leftNav}>
            <NavigationButton
              params={this.props.params}
              target={this._links.prevPage}
              icon={'navigate_before'}
            />
          </div>
          <div className={classes.rightNav}>
            <NavigationButton
              params={this.props.params}
              target={this._links.nextPage}
              icon={'navigate_next'}
            />
          </div>
        </div>
      </div>
     )
  }
}

OpenSeaDragonPage.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default OpenSeaDragonPage
