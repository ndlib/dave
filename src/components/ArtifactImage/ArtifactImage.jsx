'use strict'
import React, { Component, PropTypes } from 'react'
import classes from './Artifact.scss'

class ArtifactImage extends Component {

  render () {
    return (
      <div className={classes.wrapper}>
        <img
          src={this.props.imageObject.imageUri}
          alt={this.props.imageObject.alt}
          title={this.props.imageObject.alt}
          style={{ height: '100%' }}
        />
      </div>
    )
  }
}

ArtifactImage.propTypes = {
  imageObject: PropTypes.object.isRequired
}

export default ArtifactImage
