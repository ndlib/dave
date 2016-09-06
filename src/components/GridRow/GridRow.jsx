'use strict'
import React, { Component, PropTypes } from 'react'
import ArtifactImage from '../ArtifactImage/'
import buildArtifactImage from '../../modules/buildArtifactImage.js'
import classes from './GridRow.scss'

class GridRow extends Component {

  render () {
    let artifactImages = []
    let i = this.props.start
    let end = this.props.start + this.props.count
    for (i; i < end; i++) {
      const imageObject = buildArtifactImage(this.props.data, this.props.params, i)
      artifactImages.push(<ArtifactImage imageObject={imageObject} key={i} />)
    }
    return (
      <div className={classes.outer}>
        <div className={classes.display}>
          {artifactImages}
        </div>
      </div>
    )
  }
}

GridRow.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  count: PropTypes.number,
  start: PropTypes.number
}

GridRow.defaultProps = {
  count: 3,
  start: 0
}
export default GridRow
