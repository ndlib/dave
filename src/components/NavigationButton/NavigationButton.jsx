'use strict'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { FontIcon } from 'material-ui'
import setPage from '../../modules/setPage.js'
import style from '../../styles/material-ui/style.js'

class NavigationButton extends Component {

  render () {
    this._target = setPage(this.props.params, this.props.data, this.props.target)
    let targetIsSame = (this._target === window.location.pathname + window.location.search)
    return (
      <Link to={this._target}>
        <FontIcon
          className='material-icons'
          style={targetIsSame ? style().viewIconsInactive : style().viewIcons}
        >{this.props.icon}</FontIcon>
      </Link>
    )
  }
}

NavigationButton.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  target: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  icon: PropTypes.string.isRequired
}

export default NavigationButton
