import React from 'react'
import ViewSelectionPanel from 'components/ViewSelectionPanel'
import { ToolbarGroup, FontIcon } from 'material-ui'
import { Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(View) ViewSelectionPanel', () => {
  let _component

  const _data = {}
  const _params = {}

  beforeEach(() => {
    _component = shallow(<ViewSelectionPanel data={ _data } params={ _params }/>)
  })

  it('Has data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a <ToolbarGroup/> component', () => {
    expect(_component.find(ToolbarGroup)).to.exist
  })

  it('Renders 3 <Link/> components', () => {
    expect(_component.find('Link')).to.have.lengthOf(3);
  })

  it('Renders 3 <FontIcon/> components', () => {
    expect(_component.find('FontIcon')).to.have.lengthOf(3);
  })
})
