// Build a list of menu options for the SequenceSelector
import React from 'react'
import { MenuItem } from 'material-ui'
function sequenceMenu (data) {
  let sequences = data.sequences
  let menu = []
  for (var i = 0; i < sequences.length; i++) {
    menu.push(<MenuItem value={i} primaryText={sequences[i].label} key={i} />)
  }
  return menu
}

export default sequenceMenu
