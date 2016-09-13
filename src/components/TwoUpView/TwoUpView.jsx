'use strict'
import React, { Component, PropTypes } from 'react'
import ArtifactImage from '../ArtifactImage/'
import buildArtifactImage from '../../modules/buildArtifactImage.js'
import classes from './TwoUpView.scss'
import OneUpView from '../OneUpView/'

class TwoUpView extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    // If we are on the first page or the last page of an even numbered
    // sequence return the single page view instead.
    var pageId = parseInt(this.props.params.pageId)
    var lastPageId = this.props.data.sequences[this.props.params.sequence].canvases.length - 1
    var pageIsEven = (pageId % 2 === 1)

    if (pageId === 0 || ((pageId === lastPageId) && pageIsEven)) {
      return (
        <OneUpView
          data={this.props.data}
          params={this.props.params}
        />
      )
    }

    var imageObject1
    var imageObject2

    if (!pageIsEven) {
      imageObject1 = buildArtifactImage(this.props.data, this.props.params, -1)
      imageObject2 = buildArtifactImage(this.props.data, this.props.params)
    }
    else {
      imageObject1 = buildArtifactImage(this.props.data, this.props.params)
      imageObject2 = buildArtifactImage(this.props.data, this.props.params, 1)
    }

    return (
      <div className={classes.outer}>
        <div className={classes.splitDisplay}>
          <ArtifactImage
            imageObject={imageObject1}
            showTitle
          />
        </div>
      <div className={classes.splitDisplay}>
          <ArtifactImage
            imageObject={imageObject2}
            showTitle
          />
        </div>
      </div>
     )
  }
}

TwoUpView.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default TwoUpView
