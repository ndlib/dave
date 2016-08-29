'use strict'
import React, { Component, PropTypes } from 'react'
import Page from '../../../components/Page/'
import { CircularProgress } from 'material-ui'

class Manifest extends Component {
  componentWillMount () {
    this.props.fetchManifest(this.props.params.manifest)
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
  // @danthewolfe data is missing a propTypes validation please verify that data should be an object
  // data: PropTypes.object,
  // @danthewolfe params is missing a propTypes validation please verify that prarmas should be an object
  // params: PropTypes.object,
  manifest: PropTypes.object,
  fetchManifest: PropTypes.func.isRequired
}

Manifest.defaultProps = {
  manifest: {},
  fetchManifest: Function
}

export default Manifest
