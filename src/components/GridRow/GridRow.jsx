'use strict'
import React, { Component, PropTypes } from 'react'
import ArtifactImage from '../ArtifactImage/'
import buildArtifactImage from '../../modules/buildArtifactImage.js'
import classes from './GridRow.scss'

class GridRow extends Component {

  render () {
    const artifactWidth = Math.round(100 / this.props.maxColumns) - 1

    let artifactImages = []
    let i = this.props.start
    let end = this.props.start + this.props.count
    for (i; i < end; i++) {
      const imageObject = buildArtifactImage(this.props.data, this.props.params, i)
      artifactImages.push(
        <ArtifactImage
          imageObject={imageObject}
          key={i}
          imageContainerWidth={artifactWidth}
          imageContainerLeftPadding={1.5}
          useFlexLayout
        />
      )
    }
    const imageRange = '(' + (this.props.start + 1) + '\u200A–\u200A' + end + ')'
    return (
      <div>
        <div className={classes.row}>
          {artifactImages}
        </div>
        <div className={classes.annotation}>
          {imageRange}
        </div>
      </div>
    )
  }
}

GridRow.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  count: PropTypes.number,
  maxColumns: PropTypes.number,
  start: PropTypes.number
}

GridRow.defaultProps = {
  count: 3,
  maxColumns: 3,
  start: 0
}
export default GridRow
