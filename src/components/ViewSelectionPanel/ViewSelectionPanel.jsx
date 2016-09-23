'use strict'
import React, { Component, PropTypes } from 'react'
import { ToolbarGroup } from 'material-ui'
import ViewSelectionButton from '../ViewSelectionButton/'

class ViewSelectionPanel extends Component {
  render () {
    return (
      <ToolbarGroup firstChild>
        <ViewSelectionButton
          params={this.props.params}
          icon='looks_one'
          view='1'
        />
        <ViewSelectionButton
          params={this.props.params}
          icon='looks_two'
          view='2'
        />
        <ViewSelectionButton
          params={this.props.params}
          icon='view_module'
          view='g'
        />
      </ToolbarGroup>
     )
  }
}

ViewSelectionPanel.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default ViewSelectionPanel
