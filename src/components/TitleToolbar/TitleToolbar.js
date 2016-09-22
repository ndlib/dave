import React, { Component, PropTypes } from 'react'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'
import SequenceSelector from '../SequenceSelector/'
import ReferralButton from '../ReferralButton/'
import style from '../../styles/material-ui/style.js'

class TitleToolbar extends Component {
  render () {
    return (
      <Toolbar style={style().toolbar}>
        <ToolbarGroup firstChild>
          <ReferralButton />
          <ToolbarTitle
            text={this.props.data.label}
            style={style().toolbarTitle}
          />
        </ToolbarGroup>
        <ToolbarGroup lastChild>
          <SequenceSelector
            data={this.props.data}
            params={this.props.params}
          />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

TitleToolbar.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default TitleToolbar
