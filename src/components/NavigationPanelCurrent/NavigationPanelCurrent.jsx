'use strict'
import React, { Component, PropTypes } from 'react'
import { SelectField } from 'material-ui'
import { browserHistory } from 'react-router'
import style from '../../styles/material-ui/style.js'
import selectFieldStyle from './modules/selectFieldStyle.js'
import setPage from '../../modules/setPage.js'
import options from './modules/options.js'

class NavigationPanelCurrent extends Component {
  constructor (props) {
    super(props)
    this._length = this.props.data.sequences[this.props.params.sequence].canvases.length
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, value) {
    if (Number.isInteger(parseInt(value))) {
      let uri = setPage(this.props.params, value)
      this.context.router.push(uri)
      browserHistory.push(uri)
    }
  }

  render () {
    let currentDisplayPage = parseInt(this.props.params.canvasId) + 1
    let boxWidth = currentDisplayPage.toString().length * 24
    return (
      <div style={style().toolbarTitle}>
        <SelectField
          hintText='Select a page...'
          value={currentDisplayPage}
          onChange={this.handleChange}
          iconStyle={selectFieldStyle().iconStyle}
          labelStyle={selectFieldStyle().labelStyle}
          style={selectFieldStyle(boxWidth).style}
          underlineStyle={selectFieldStyle().underlineStyle}
        >{options(this._length)}</SelectField> / {this._length}</div>
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
