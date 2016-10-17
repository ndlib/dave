'use strict'
import React, { Component, PropTypes } from 'react'
import Page from '../../../components/Page/'
import { CircularProgress } from 'material-ui'

class Manifest extends Component {

  componentWillMount () {
    this.props.fetchManifest(this.props.params.base, this.props.params.manifest)
  }

  render () {
    if (this.props.data) {
      return (
        <Page
          data={this.props.data}
          params={this.props.params}
        />
      )
    }
    return (<CircularProgress />)
  }
}

Manifest.propTypes = {
  data: PropTypes.object,
  params: PropTypes.object,
  manifest: PropTypes.object,
  fetchManifest: PropTypes.func.isRequired
}

Manifest.defaultProps = {
  manifest: {},
  fetchManifest: Function
}

export default Manifest
