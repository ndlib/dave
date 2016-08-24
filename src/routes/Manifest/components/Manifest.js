'use strict'
import React, { Component, PropTypes } from 'react'
import classes from './Manifest.scss';
import type { ManifestObject } from '../interfaces/manifest';
import Page from '../../../components/Page/';
import { CircularProgress } from 'material-ui'

class Manifest extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchManifest(this.props.params.manifest);
  }

  render() {
    if(this.props.data) {
      return (
        <Page
          data={ this.props.data }
          params={ this.props.params }
        />
      );
    }
    return (<CircularProgress />);
  }
}
Manifest.propTypes = {
  manifest: React.PropTypes.object,
  fetchManifest: React.PropTypes.func.isRequired,
}

Manifest.defaultProps = {
  manifest: {},
  fetchManifest: Function,
}

export default Manifest
