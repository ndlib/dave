'use strict'
import React, { Component, PropTypes } from 'react'
import buildKeyPairs from '../../modules/buildKeyPairs.js'
import classes from './KeyPairMetadata.scss'

class KeyPairMetadata extends Component {

  render () {
    if (this.props.metadata) {
      let pairs = buildKeyPairs(this.props.metadata)
      return (
        <dl className={classes.metadata}>
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
