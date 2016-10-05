'use strict'
import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import style from '../../styles/material-ui/style.js'
import setPage from '../../modules/setPage.js'
import options from './modules/options.js'

class NavigationPanelCurrent extends Component {
  constructor (props) {
    super(props)
    this._length = this.props.data.sequences[this.props.params.sequence].canvases.length
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    let value = this.refs.select.value
    if (Number.isInteger(parseInt(value))) {
      let uri = setPage(this.props.params, this.props.data, value)
      this.context.router.push(uri)
      browserHistory.push(uri)
    }
  }

  render () {
    let currentDisplayPage = parseInt(this.props.params.canvasId)
    return (
      <div style={style().toolbarTitle}>
        <select
          ref='select'
          value={currentDisplayPage}
          onChange={this.handleChange}
        >{options(this._length)}</select> / {this._length}</div>
    )
  }
}

NavigationPanelCurrent.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

NavigationPanelCurrent.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default NavigationPanelCurrent
