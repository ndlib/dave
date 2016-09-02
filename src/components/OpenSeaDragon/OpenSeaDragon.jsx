'use strict'
import React, { Component, PropTypes } from 'react'
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
  }

  componentDidMount () {
    this.initSeaDragon()
  }

  initSeaDragon () {
    let self = this
    let { id, image, type } = this.props
    loadImage(image).then(data => {
      self.viewer = OpenSeadragon({
        id: id,
        visibilityRatio: 1.0,
        constrainDuringPan: false,
        defaultZoomLevel: 1,
        minZoomLevel: -2,
        maxZoomLevel: 10,
        zoomInButton: 'zoom-in',
        zoomOutButton: 'zoom-out',
        homeButton: 'reset',
        rotateLeftButton: 'rotate-left',
        rotateRightButton: 'rotate-right',
        showRotationControl: true,
        fullPageButton: 'full-page',
        showNavigator: this._mobile ? false : true,
        navigatorId: 'navigator',
        tileSources: {
          type: type,
          levels: [ { url: image, height: data.naturalHeight, width: data.naturalWidth } ]
        }
      })
    })
  }

  render () {
    let { id } = this.props
    return (
      <div className={classes.ocd}>
        <div className={classes.openseadragon} id={id}></div>
        <OpenSeaDragonNavigator />
        <OpenSeaDragonControls />
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
