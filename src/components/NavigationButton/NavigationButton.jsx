'use strict'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { FontIcon } from 'material-ui'
import setPage from '../NavigationPanel/modules/setPage.js'

class NavigationButton extends Component {
  render () {
    return (
      <Link to={setPage(this.props.params, this.props.target)}>
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
