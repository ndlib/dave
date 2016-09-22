'use strict'
import React, { Component, PropTypes } from 'react'
import { Toolbar, ToolbarGroup, ToolbarTitle, FontIcon } from 'material-ui'
import { browserHistory, Link } from 'react-router'
import style from '../../styles/material-ui/style.js'
import NavigationPanel from '../NavigationPanel/'
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

  componentWillUpdate (nextProps, nextState) {
    this._image = buildOpenSeaDragonImage(nextProps.data, nextProps.params)
  }

  handleKeyPress (e) {
    // 27 is keycode for escape
    if (e.keyCode === 27) {
      this.context.router.push(this._image.closeUri)
      browserHistory.push(this._image.closeUri)
    }
  }

  render () {
    return (
      <div className={classes.outer}>
        <Toolbar style={style().toolbar}>
          <ToolbarGroup firstChild>
            <FontIcon className='material-icons' />
            <ToolbarTitle
              text={this._image.label}
              style={style().toolbarTitle}
              />
          </ToolbarGroup>

          <ToolbarGroup>
            <Link to={this._image.closeUri} style={style().toolbarTitle}>
              <FontIcon className={classes.hoverSpin + ' material-icons'} style={{fontSize: '18px'}}>close</FontIcon>
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
        <div className={classes.navigationOuterWrapper}>
          <div className={classes.navigationInnerWrapper}>
            <NavigationPanel
              data={this.props.data}
              params={this.props.params}
              increment={1}
            />
          </div>
        </div>
      </div>
     )
  }
}

OpenSeaDragonPage.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

OpenSeaDragonPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default OpenSeaDragonPage
