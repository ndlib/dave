'use strict'
import React, { Component, PropTypes } from 'react'
import { FontIcon } from 'material-ui'

const style = {
  fontSize: '36px'
}

class OpenSeaDragonButton extends Component {

  render () {
    return (
      <li>
        <a id={this.props.id}>
          <FontIcon
            className='material-icons'
            style={style}
          >{this.props.icon}</FontIcon>
        </a>
      </li>
     )
  }
}

OpenSeaDragonButton.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
export default OpenSeaDragonButton
