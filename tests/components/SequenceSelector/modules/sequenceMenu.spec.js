import React from 'react'
import { MenuItem } from 'material-ui'
import sequenceMenu from 'components/SequenceSelector/modules/sequenceMenu.js'
import { shallow } from 'enzyme'

describe('(Module) sequenceMenu', () => {
  const _data = {
    sequences: [{label: 's1'}, {label: 's2'}, {label: 's3'}]
  }

  let _menu = sequenceMenu(_data)

  it('Returns an Array of length 3', () => {
    expect(_menu).to.have.length(3)
  })

  it('To be a <MenuItem/> with the correct props', () => {
    expect(_menu[1].props.value).to.equal(1)
    expect(_menu[1].props.primaryText).to.equal('s2')
    expect(_menu[1].key).to.equal('1')
  })

})
