import React from 'react'
import TitleToolbar from 'components/TitleToolbar'
import { Toolbar, ToolbarTitle } from 'material-ui'
import { shallow } from 'enzyme'

describe('(View) TitleToolbar', () => {
  let _component
  const _data = {}
  const _params = {}

  beforeEach(() => {
    _component = shallow(<TitleToolbar data={ _data } params={ _params }/>)
  })

  it('Has a data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a <Toolbar/> component', () => {
    expect(_component.find(Toolbar)).to.exist
  })

  it('Renders a <ToolbarTitle/> component', () => {
    expect(_component.find(ToolbarTitle)).to.exist
  })

  // need to render sequence selector component after it's written
})
