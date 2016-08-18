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
    console.table([['source', this.props.params.source], ['manifest', this.props.params.manifest], ['sequence', this.props.params.sequence], ['view', this.props.params.view], ['pageId', this.props.params.pageId], ['detail', this.props.params.detail]]);
  }

  render() {
    console.log('this.props', this.props);
    if(this.props.data) {
      return (
        <Page data={ this.props.data }/>
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
