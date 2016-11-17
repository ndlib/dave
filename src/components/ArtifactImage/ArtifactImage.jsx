'use strict'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './Artifact.scss'
import StyleImage from './StyleImage.js'

class ArtifactImage extends Component {

  render () {
    const wrapperClass = this.props.useFlexLayout ? classes.flexwrapper : classes.wrapper
    let title = null
    if (this.props.showTitle && this.props.imageObject.alt) {
      let style = {}
      if (this.props.align === 'right') {
        style = {
          position: 'absolute',
          right: '0'
        }
      }
      title = (
        <h2
          className={classes.title}
          style={style}
        >{this.props.imageObject.alt}</h2>
      )
    }
    return (
      <div
        className={wrapperClass}
        style={{
          width: this.props.imageContainerWidth + '%',
          marginLeft: this.props.imageContainerLeftPadding + '%'
        }}
       >
        <Link to={this.props.imageObject.objectLink}>
          <img
            ref={this.props.imageObject.canvasId}
            src={this.props.imageObject.imageUri}
            alt={this.props.imageObject.alt}
            title={this.props.imageObject.alt}
            style={StyleImage(this.props.align)}
          />
        </Link>
        {title}
      </div>
    )
  }
}

ArtifactImage.propTypes = {
  imageObject: PropTypes.object.isRequired,
  imageContainerWidth: PropTypes.number,
  imageContainerLeftPadding: PropTypes.number,
  useFlexLayout: PropTypes.bool,
  showTitle: PropTypes.bool,
  align: PropTypes.string
}

ArtifactImage.defaultProps = {
  imageContainerWidth: 100,
  imageContainerLeftPadding: 0,
  useFlexLayout: false,
  showTitle: false,
  align: 'center'
}

export default ArtifactImage
