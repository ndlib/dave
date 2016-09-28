'use strict'
import React, { Component, PropTypes } from 'react'
import KeyPairMetadata from '../KeyPairMetadata/'
import concatMetadata from '../../modules/concatMetadata.js'
import additionalMetadata from '../../modules/additionalMetadata.js'

class CanvasMetadata extends Component {

  render () {
    if (this.props.params.view !== 'g') {
      let data = this.props.data.sequences[this.props.params.sequence].canvases[this.props.params.canvasId]
      let metadata = concatMetadata(data.metadata, additionalMetadata(data))
      return (
        <div>
          <h2>Metadata</h2>
          <KeyPairMetadata metadata={metadata} />
        </div>
      )
    } else {
      return null
    }
  }
}

CanvasMetadata.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default CanvasMetadata
