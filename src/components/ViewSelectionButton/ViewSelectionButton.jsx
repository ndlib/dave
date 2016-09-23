'use strict'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { FontIcon } from 'material-ui'
import setView from '../../modules/setView.js'
import style from '../../styles/material-ui/style.js'
import classes from './ViewSelectionButton.scss'

class ViewSelectionButton extends Component {

  render () {
    let active = false
    if (this.props.view === this.props.params.view) {
      active = true
    }

    return (
      <Link
        to={setView(this.props.params, this.props.view)}
        className={active ? classes.active : classes.inactive}
      >
        <FontIcon
          className='material-icons'
          style={style().viewIcons}
        >{this.props.icon}</FontIcon>
      </Link>
     )
  }
}

ViewSelectionButton.propTypes = {
  params: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired
}

export default ViewSelectionButton
