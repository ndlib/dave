import React from 'react'
import OpenSeaDragonPage from 'components/OpenSeaDragonPage'
import OpenSeaDragon from 'components/OpenSeaDragon'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui'
import { shallow } from 'enzyme'

describe('(View) OpenSeaDragonPage', () => {
  let _component
  const _data = { sequences: { 0: { canvases: { 1: {label: 'label', images: {0:{resource: '@id'}}}}}}}

  const _params = {
    sequence: 0,
    pageId: 1
  }

  beforeEach(() => {
    _component = shallow(<OpenSeaDragonPage data={ _data } params={ _params }/>)
  })

  it('Has a data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders an <OpenSeaDragon/> component', () => {
    expect(_component.find(OpenSeaDragon)).to.exist
  })

  it('Renders a <Toolbar/> with a <ToolbarTitle/>', () => {
    expect(_component.find(Toolbar)).to.exist
    expect(_component.find(ToolbarTitle)).to.exist
  })
})
