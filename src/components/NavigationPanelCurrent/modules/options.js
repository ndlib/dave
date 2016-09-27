import React from 'react'
function options (length) {
  let options = []
  for (let i = 1; i <= length; i++) {
    options.push(
      <option
        key={i}
        value={i - 1}
      >{i}</option>
    )
  }
  return options
}

export default options
