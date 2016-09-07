'use strict'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { FontIcon } from 'material-ui'
import setPage from '../../modules/setPage.js'

class NavigationButton extends Component {

  constructor (props) {
    super(props)
    this._target = setPage(this.props.params, this.props.target)
  }

  render () {
    this._target = setPage(this.props.params, this.props.target)
    return (
      <Link to={this._target}>
        <FontIcon className='material-icons'>{this.props.icon}</FontIcon>
      </Link>
    )
  }
}

NavigationButton.propTypes = {
  params: PropTypes.object.isRequired,
  target: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  icon: PropTypes.string.isRequired
}

export default NavigationButton
