'use strict'
import React, { Component, PropTypes } from 'react'
import NavigationPanel from '../NavigationPanel/'
import OpenSeaDragonToolbar from '../OpenSeaDragonToolbar/'
import OpenSeaDragon from '../OpenSeaDragon/'
import classes from './OpenSeaDragonPage.scss'
import buildOpenSeaDragonImage from './modules/buildOpenSeaDragonImage.js'

class OpenSeaDragonPage extends Component {

  constructor (props) {
    super(props)
    this._image = buildOpenSeaDragonImage(this.props.data, this.props.params)
  }

  componentWillUpdate (nextProps, nextState) {
    this._image = buildOpenSeaDragonImage(nextProps.data, nextProps.params)
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
          <div className={classes.navigationInnerWrapper}>
            <NavigationPanel
              data={this.props.data}
              params={this.props.params}
              increment={1}
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
