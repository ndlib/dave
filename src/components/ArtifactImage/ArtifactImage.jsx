'use strict'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './Artifact.scss'
import StyleImage from './StyleImage.js'

class ArtifactImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      portrait: null
    }
    this.setOrientation = this.setOrientation.bind(this)
  }

  componentDidMount () {
    this.setOrientation(this.props)
  }

  componentDidUpdate () {
    if (typeof this.state.portrait !== 'boolean') {
      this.setOrientation(this.props)
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setOrientation(nextProps)
  }

  setOrientation (props) {
    let ref = this.refs[this.props.imageObject.canvasId]

    // Check if target image is loaded. If it is not we need to manually
    // load it and set a callback to set state.
    if (this.props !== props || ref.naturalWidth === 0 || ref.naturalHeight === 0) {
      let img = new Image()
      img.src = props.imageObject.imageUri
      let self = this
      img.onload = function () { self.setState({portrait: img.naturalWidth <= img.naturalHeight}) }
    // If image IS loaded, we just check the width & height.
    } else {
      this.setState({portrait: ref.naturalWidth <= ref.naturalHeight})
    }
  }

  render () {
    const wrapperClass = this.props.useFlexLayout ? classes.flexwrapper : classes.wrapper
    let title = null
    if (this.props.showTitle && this.props.imageObject.alt) {
      title = (<h2 className={classes.title}>{this.props.imageObject.alt}</h2>)
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
            style={StyleImage(this.state.portrait, this.props.align)}
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
