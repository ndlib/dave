'use strict'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './Artifact.scss'

class ArtifactImage extends Component {
  render () {
    const wrapperClass = this.props.useFlexLayout ? classes.flexwrapper : classes.wrapper
    return (
      <div className={wrapperClass} style={{ width: this.props.imageContainerWidth + '%' }} >
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
  imageObject: PropTypes.object.isRequired,
  imageContainerWidth: PropTypes.number,
  useFlexLayout: PropTypes.bool
}

ArtifactImage.defaultProps = {
  imageContainerWidth: 100,
  useFlexLayout: false
}

export default ArtifactImage
