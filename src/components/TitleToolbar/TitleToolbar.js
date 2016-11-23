import React, { Component, PropTypes } from 'react'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'
import ReferralButton from '../ReferralButton/'
import style from '../../styles/material-ui/style.js'
import inIframe from '../../modules/inIframe.js'

class TitleToolbar extends Component {
  render () {
    if (inIframe()) {
      return null
    }
    return (
      <Toolbar style={style().toolbar}>
        <ToolbarGroup firstChild>
          <ReferralButton />
          <ToolbarTitle
            text={this.props.data.label}
            style={style().toolbarTitle}
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
