'use strict'
import React, { Component, PropTypes } from 'react'
import ArtifactImage from '../ArtifactImage/'
import buildArtifactImage from '../../modules/buildArtifactImage.js'
import classes from './OneUpView.scss'

class OneUpView extends Component {
  render () {
    const imageObject = buildArtifactImage(this.props.data, this.props.params)
    return (
      <div className={classes.outer}>
        <div className={classes.display}>
          <ArtifactImage
            imageObject={imageObject}
            showTitle
          />
        </div>
      </div>
    )
  }
}

OneUpView.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default OneUpView
