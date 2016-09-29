'use strict'
import React, { Component, PropTypes } from 'react'
import KeyPairMetadata from '../KeyPairMetadata/'
import concatMetadata from '../../modules/concatMetadata.js'
import additionalMetadata from '../../modules/additionalMetadata.js'
import canvasIdIsOdd from '../../modules/canvasIdIsOdd.js'

class CanvasMetadata extends Component {

  render () {
    let params = this.props.params
    // return null for gridbiew otherwise show metadata for current canvasId(s)
    if (params.view !== 'g') {
      let isOdd = canvasIdIsOdd(params.canvasId)
      // If we're in TwoUpView we need to display 2 sets of metadata, unless
      // we are looking at the first canvasId OR the last canvasId when there
      // is an even number of canvases
      if (
        (params.view === '2') &&
        (params.canvasId !== '0') &&
        !(parseInt(params.canvasId) === this.props.data.sequences[this.props.params.sequence].canvases.length - 1 && isOdd)
      ) {
        let data = this.props.data
        let data1, data2
        let metadata1, metadata2

        // If we're looking at an even canvasId display it and the one before
        if (!isOdd) {
          data1 = data.sequences[params.sequence].canvases[parseInt(params.canvasId) - 1]
          data2 = data.sequences[params.sequence].canvases[params.canvasId]
        // If we're looking at an odd canvasId display it and the one after
        } else {
          data1 = data.sequences[params.sequence].canvases[params.canvasId]
          data2 = data.sequences[params.sequence].canvases[parseInt(params.canvasId) + 1]
        }
        // Build two metadata displays
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
      // If we're looking at the OneUpView, or one of the special cases for
      // TwoUpView mentioned above, we display only the current canvasId
      // metadata.
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
