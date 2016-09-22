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
  componentWillReceiveProps (nextProps) {
    this.initSeaDragon()
  }

  initSeaDragon () {
    let self = this
    loadImage(this.props.image).then(data => {
      if (self.viewer) {
        if (self.viewer.navigator) {
          self.viewer.navigator.destroy()
        }
        self.viewer.destroy()
      }
      self.viewer = OpenSeadragon({
        id: self.props.id,
        visibilityRatio: 1.0,
        constrainDuringPan: false,
        defaultZoomLevel: 0,
        minZoomLevel: -2,
        maxZoomLevel: 10,
        zoomInButton: 'zoom-in',
        zoomOutButton: 'zoom-out',
        homeButton: 'reset',
        rotateLeftButton: 'rotate-left',
        rotateRightButton: 'rotate-right',
        showRotationControl: true,
        fullPageButton: 'full-page',
        showNavigator: self._mobile ? false : true,
        navigatorId: 'navigator',
        tileSources: {
          type: self.props.type,
          levels: [ { url: self.props.image, height: data.naturalHeight, width: data.naturalWidth } ]
        }
      })
    })
  }

  render () {
    return (
      <div className={classes.ocd}>
        <div className={classes.openseadragon} id={this.props.id}></div>
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
