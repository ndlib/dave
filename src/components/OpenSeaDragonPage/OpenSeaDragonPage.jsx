'use strict'
import React, { Component, PropTypes } from 'react'
import { Toolbar, ToolbarGroup, ToolbarTitle, FontIcon } from 'material-ui'
import { browserHistory, Link } from 'react-router'

import OpenSeaDragon from '../OpenSeaDragon/'
import classes from './OpenSeaDragonPage.scss'
import buildOpenSeaDragonImage from './modules/buildOpenSeaDragonImage.js'

class OpenSeaDragonPage extends Component {

  constructor (props) {
    super(props)
    this._image = buildOpenSeaDragonImage(this.props.data, this.props.params)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress (e) {
    // 27 is keycode for escape
    if (e.keyCode === 27) {
      // perform the navigation
      browserHistory.goBack()
      // update the url
      browserHistory.push(this._image.closeUri)
    }
  }

  render () {
    return (
      <div className={classes.outer}>
        <Toolbar>
          <ToolbarGroup firstChild>
            <ToolbarTitle text={this._image.label} />
          </ToolbarGroup>

          <ToolbarGroup>
            <Link to={this._image.closeUri}>
              <FontIcon className='material-icons'>close</FontIcon>
            </Link>
          </ToolbarGroup>
        </Toolbar>
        <div className={classes.viewer}>
          <OpenSeaDragon
            id='ocd-viewer'
            type='legacy-image-pyramid'
            image={this._image.imageUri}
          />
        </div>
      </div>
     )
  }
}

OpenSeaDragonPage.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default OpenSeaDragonPage
