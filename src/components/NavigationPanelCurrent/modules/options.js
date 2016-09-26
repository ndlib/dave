import React from 'react'
import { MenuItem } from 'material-ui'
import selectFieldStyle from './selectFieldStyle.js'
function options (length) {
  let options = []
  for (let i = 1; i <= length; i++) {
    options.push(
      <MenuItem
        key={i}
        value={i}
        primaryText={i}
        innerDivStyle={selectFieldStyle().menuStyle}
      />
    )
  }
  return options
}

export default options
