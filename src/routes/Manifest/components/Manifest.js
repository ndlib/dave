'use strict'
import React, { Component, PropTypes } from 'react'
import classes from './Manifest.scss';
import Base64 from '../modules/Base64.js';
import type { ManifestObject } from '../interfaces/manifest';

import Page from '../../../components/Page/';


class Manifest extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchManifest(Base64.decode(this.props.params.manifest));
  }

  render() {
    return (
      <Page />
    );
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
