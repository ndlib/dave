'use strict'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './Artifact.scss'

class ArtifactImage extends Component {

  render () {
    return (
      <div className={classes.wrapper}>
        <Link to={this.props.imageObject.zoomLink}>
          <img
            src={this.props.imageObject.imageUri}
            alt={this.props.imageObject.alt}
            title={this.props.imageObject.alt}
            style={{ height: '100%' }}
          />
        </Link>
      </div>
    )
  }
}

ArtifactImage.propTypes = {
  imageObject: PropTypes.object.isRequired
}

export default ArtifactImage
