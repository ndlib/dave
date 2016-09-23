'use strict'
import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { FontIcon, Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'
import classes from './OpenSeaDragonToolbar.scss'
import style from '../../styles/material-ui/style.js'

class OpenSeaDragonToolbar extends Component {
  constructor (props) {
    super(props)
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
      this.context.router.push(this.props.image.closeUri)
      browserHistory.push(this.props.image.closeUri)
    }
  }

  render () {
    return (
      <Toolbar style={style().toolbar}>
        <ToolbarGroup firstChild>
          <ToolbarTitle
            text={this.props.image.label}
            style={style().toolbarTitle}
            />
        </ToolbarGroup>

        <ToolbarGroup>
          <Link to={this.props.image.closeUri} style={style().toolbarTitle}>
            <FontIcon className={classes.hoverSpin + ' material-icons'} style={{fontSize: '18px'}}>close</FontIcon>
          </Link>
        </ToolbarGroup>
      </Toolbar>
     )
  }
}

OpenSeaDragonToolbar.propTypes = {
  image: PropTypes.object.isRequired
}

OpenSeaDragonToolbar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default OpenSeaDragonToolbar
