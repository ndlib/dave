'use strict'
import React, { Component, PropTypes } from 'react'
import ArtifactImage from '../ArtifactImage/'
import buildArtifactImage from '../../modules/buildArtifactImage.js'
import classes from './TwoUpView.scss'
import OneUpView from '../OneUpView/'
import canvasIdIsOdd from '../../modules/canvasIdIsOdd.js'
class TwoUpView extends Component {

  render () {
    // If we are on the first page or the last page of an even numbered
    // sequence return the single page view instead.
    // We use canvasIdIsOdd because canvasId starts at 0
    let canvasId = parseInt(this.props.params.canvasId)
    let lastcanvasId = this.props.data.sequences[this.props.params.sequence].canvases.length - 1
    let isOdd = canvasIdIsOdd(canvasId)
    if (canvasId === 0 || ((canvasId === lastcanvasId) && isOdd)) {
      return (
        <OneUpView
          data={this.props.data}
          params={this.props.params}
        />
      )
    }

    var imageObject1
    var imageObject2

    if (!isOdd) {
      imageObject1 = buildArtifactImage(this.props.data, this.props.params, -1)
      imageObject2 = buildArtifactImage(this.props.data, this.props.params)
    } else {
      imageObject1 = buildArtifactImage(this.props.data, this.props.params)
      imageObject2 = buildArtifactImage(this.props.data, this.props.params, 1)
    }

    return (
      <div className={classes.outer}>
        <div className={classes.splitDisplay}>
          <div className={classes.splitDisplayInner}>
            <ArtifactImage
              imageObject={imageObject1}
              showTitle
            />
          </div>
        </div>
        <div className={classes.splitDisplay}>
          <div className={classes.splitDisplayInner}>
            <ArtifactImage
              imageObject={imageObject2}
              showTitle
            />
          </div>
        </div>
      </div>
    )
  }
}

TwoUpView.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default TwoUpView
