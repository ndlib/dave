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
      <Toolbar style={{
        backgroundColor: 'rgba(66,66,66,.4)',
        position: 'absolute',
        width: '100%',
        zIndex: '2'
      }}>
        <ToolbarGroup firstChild>
          <ToolbarTitle
            text={this.props.image.label}
            style={{
              color: '#fff',
              textShadow: '2px 2px #000',
              fontSize: '16px',
              fontWeight: '400',
              margin: '0',
              padding: '0 20px'
            }}
            />
        </ToolbarGroup>
        <ToolbarGroup>
          <Link to={this.props.image.closeUri} style={style().toolbarTitle}>
            <FontIcon
              className={classes.hoverSpin + ' material-icons'}
              style={{
                color: '#fff',
                textShadow: '2px 2px #000',
                fontSize: '30px',
                marginTop: '10px'
              }}
            >close</FontIcon>
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
