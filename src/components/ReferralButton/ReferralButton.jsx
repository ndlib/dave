'use strict'
import React, { Component } from 'react'
import { FontIcon } from 'material-ui'
import getSourceUri from './modules/getSourceUri.js'

class ReferralButton extends Component {

  constructor (props) {
    super(props)
    this.state = {source: null}
  }

  componentWillMount () {
    if (window.location.search) {
      this.setState({ source: getSourceUri(window.location.search) })
    }
  }

  render () {
    if (this.state.source) {
      return (
        <a href={this.state.source}>
          <FontIcon
            className='material-icons'
            style={this.style()}
          >keyboard_backspace</FontIcon>
        </a>
       )
    }
    return null
  }

  style () {
    return {
      color: '#656557',
      lineHeight: '51px',
      margin: '0 4px',
      verticalAlign: 'middle'
    }
  }
}

export default ReferralButton
