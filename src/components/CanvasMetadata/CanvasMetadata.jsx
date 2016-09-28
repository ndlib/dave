'use strict'
import React, { Component, PropTypes } from 'react'
import KeyPairMetadata from '../KeyPairMetadata/'
import concatMetadata from '../../modules/concatMetadata.js'
import additionalMetadata from '../../modules/additionalMetadata.js'
import canvasIdIsOdd from '../../modules/canvasIdIsOdd.js'

class CanvasMetadata extends Component {

  render () {
    let params = this.props.params
    if (params.view !== 'g') {
      let isOdd = canvasIdIsOdd(params.canvasId)
      if (
        (params.view === '2') &&
        (params.canvasId !== '0') &&
        !(parseInt(params.canvasId) === this.props.data.sequences[this.props.params.sequence].canvases.length - 1 && isOdd)
      ) {
        let data = this.props.data
        let data1, data2
        let metadata1, metadata2

        if (!isOdd) {
          data1 = data.sequences[params.sequence].canvases[parseInt(params.canvasId) - 1]
          data2 = data.sequences[params.sequence].canvases[params.canvasId]
        } else {
          data1 = data.sequences[params.sequence].canvases[params.canvasId]
          data2 = data.sequences[params.sequence].canvases[parseInt(params.canvasId) + 1]
        }
        metadata1 = concatMetadata(data1.metadata, additionalMetadata(data1))
        metadata2 = concatMetadata(data2.metadata, additionalMetadata(data2))
        return (
          <div>
            <h2>Metadata <em>(left)</em></h2>
            <KeyPairMetadata metadata={metadata1} />
            <h2>Metadata <em>(right)</em></h2>
            <KeyPairMetadata metadata={metadata2} />
          </div>
        )
      } else {
        let data = this.props.data.sequences[params.sequence].canvases[params.canvasId]
        let metadata = concatMetadata(data.metadata, additionalMetadata(data))

        return (
          <div>
            <h2>Metadata</h2>
            <KeyPairMetadata metadata={metadata} />
          </div>
        )
      }
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
