'use strict'
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import { FontIcon } from 'material-ui'
import setPage from '../NavigationPanel/modules/setPage.js'

class NavigationButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={ setPage(this.props.params, this.props.target) }>
        <FontIcon className="material-icons">{ this.props.icon }</FontIcon>
      </Link>
     );
  }
}

NavigationButton.propTypes = {
  params: React.PropTypes.object.isRequired,
  target: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string,
  ]).isRequired,
  icon: React.PropTypes.string.isRequired
}
export default NavigationButton;
