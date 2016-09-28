'use strict'
import React, { Component, PropTypes } from 'react'
import buildKeyPairs from '../../modules/buildKeyPairs.js'

class KeyPairMetadata extends Component {

  render () {
    if (this.props.metadata) {
      let pairs = buildKeyPairs(this.props.metadata)
      return (
        <dl>
          {pairs}
        </dl>
      )
    } else {
      return null
    }
  }
}

KeyPairMetadata.propTypes = {
  metadata: PropTypes.array
}

export default KeyPairMetadata
