/* @flow */
import { connect } from 'react-redux'
import { fetchManifest } from '../modules/manifest'

import Manifest from '../components/Manifest'

import type { ManifestObject } from '../interfaces/manifest'

const mapActionCreators: {fetchManifest: Function} = {
  fetchManifest
}

const mapStateToProps = (state): { manifest: ?ManifestObject } => ({
  data: state.manifest.data
})

export default connect(mapStateToProps, mapActionCreators)(Manifest)
