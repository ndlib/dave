import React from 'react'
import SequenceSelector from 'components/SequenceSelector'
import { DropDownMenu } from 'material-ui'
import { shallow } from 'enzyme'

describe('(View) SequenceSelector', () => {
  let _component
  const _data = {
    sequences: [{},{},{}]
  }
  const _params = {
    sequence: '1'
  }

  beforeEach(() => {
    _component = shallow(<SequenceSelector data={ _data } params={ _params }/>)
  })

  it('Has a data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a <DropDownMenu/> component', () => {
    expect(_component.find('DropDownMenu')).to.exist
  })
})
