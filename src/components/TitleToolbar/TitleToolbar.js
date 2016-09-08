import React, { Component, PropTypes } from 'react'
import { FontIcon, Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'
import SequenceSelector from '../SequenceSelector/'

class TitleToolbar extends Component {
  render () {
    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <FontIcon className='material-icons'>keyboard_backspace</FontIcon>
          <ToolbarTitle text={this.props.data.label} />

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
