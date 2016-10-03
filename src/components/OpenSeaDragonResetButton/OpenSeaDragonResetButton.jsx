'use strict'
import React, { Component, PropTypes } from 'react'
import { FontIcon } from 'material-ui'

const style = {
  fontSize: '36px'
}

class OpenSeaDragonResetButton extends Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.reset()
  }

  render () {
    return (
      <li>
        <a onClick={this.handleClick}>
          <FontIcon
            className='material-icons'
            style={style}
          >find_replace</FontIcon>
        </a>
      </li>
     )
  }
}

OpenSeaDragonResetButton.propTypes = {
  reset: PropTypes.func
}

export default OpenSeaDragonResetButton
