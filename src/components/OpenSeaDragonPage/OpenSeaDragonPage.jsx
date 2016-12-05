'use strict'
import React, { Component, PropTypes } from 'react'
import TitleToolbar from '../TitleToolbar/'
import OpenSeaDragon from '../OpenSeaDragon/'
import OpenSeaDragonPrevNext from '../OpenSeaDragonPrevNext/'
import buildOpenSeaDragonImage from './modules/buildOpenSeaDragonImage.js'
import classes from './OpenSeaDragonPage.scss'

class OpenSeaDragonPage extends Component {
  constructor (props) {
    super(props)
    this._image = buildOpenSeaDragonImage(this.props.data, this.props.params)
    this.prevNext = this.prevNext.bind(this)
  }

  componentWillUpdate (nextProps, nextState) {
    this._image = buildOpenSeaDragonImage(nextProps.data, nextProps.params)
  }

  viewerHeight () {
    return {height: 'calc(100% - 56px)'}
  }

  prevNext () {
    return (
      <OpenSeaDragonPrevNext
        data={this.props.data}
        params={this.props.params}
      />
    )
  }
  render () {
    return (
      <div className={classes.outer}>
        <TitleToolbar
          data={this.props.data}
          params={this.props.params}
        />
        <div
          className={classes.viewer}
          style={this.viewerHeight()}>
          <OpenSeaDragon
            id='ocd-viewer'
            type='legacy-image-pyramid'
            image={this._image}
          />
        </div>
        {this.prevNext()}
      </div>
     )
  }
}

OpenSeaDragonPage.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default OpenSeaDragonPage
