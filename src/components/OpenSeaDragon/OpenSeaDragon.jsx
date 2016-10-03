'use strict'
import React, { Component, PropTypes } from 'react'
import { CircularProgress } from 'material-ui'
import MobileDetect from 'mobile-detect'
import OpenSeadragon from './library/openseadragon.min.js'
import OpenSeaDragonControls from '../OpenSeaDragonControls/'
import OpenSeaDragonNavigator from '../OpenSeaDragonNavigator/'
import classes from './OpenSeaDragon.scss'
import loadImage from './modules/loadImage.js'

class OpenSeaDragon extends Component {

  constructor (props) {
    super(props)
    let _mobileDetect = new MobileDetect(navigator.userAgent)
    // mobile() will return null for desktop browsers or a string for mobile devices
    this._mobile = _mobileDetect.mobile()
    this.state = {
      loading: true,
      zoom: 0
    }
    this.viewer = null
    this.resetViewer = this.resetViewer.bind(this)
  }

  componentDidMount () {
    this.viewer = this.initSeaDragon(this.props.image, this.state.zoom)
  }

  componentWillReceiveProps (nextProps) {
    let zoom = this.viewer.viewport.getZoom()
    this.viewer = this.initSeaDragon(nextProps.image, zoom)
  }

  resetViewer () {
    // TODO
    // pass this method down and make a custom button

    this.viewer = this.initSeaDragon(this.props.image, 0)
  }

  initSeaDragon (image, zoom) {
    let self = this
    loadImage(image).then(data => {
      if (self.viewer) {
        self.setState({loading: true})
      }
      let options = {
        id: self.props.id,
        visibilityRatio: 1.0,
        constrainDuringPan: false,
        defaultZoomLevel: zoom,
        showFullPageControl: false,
        minZoomLevel: 0.02,
        maxZoomLevel: 10,
        zoomInButton: 'zoom-in',
        zoomOutButton: 'zoom-out',
        showHomeControl: false,
        // homeButton: 'reset',
        showNavigator: false,
        navigatorId: 'navigator',
        tileSources: {
          type: self.props.type,
          levels: [ { url: image, height: data.naturalHeight, width: data.naturalWidth } ]
        }
      }
      if (!self._mobile) {
        options.showFullPageControl = true
        options.showNavigator = true
        options.showRotationControl = true
        options.fullPageButton = 'full-page'
        options.rotateLeftButton = 'rotate-left'
        options.rotateRightButton = 'rotate-right'
      }
      self.setState({
        loading: false,
        zoom: zoom
      })
      self.viewer = OpenSeadragon(options)
    })
    return self.viewer
  }

  render () {
    if (this.state.loading) {
      return (<CircularProgress />)
    }
    return (
      <div className={classes.ocd}>
        <div className={classes.openseadragon} id={this.props.id}></div>
        <OpenSeaDragonNavigator />
        <OpenSeaDragonControls reset={this.resetViewer} />
      </div>
    )
  }
}

OpenSeaDragon.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string
}

OpenSeaDragon.defaultProps = {
  id: 'ocd-viewer',
  type: 'legacy-image-pyramid'
}

export default OpenSeaDragon
