import React from 'react'
import OpenSeaDragonPage from 'components/OpenSeaDragonPage'
import OpenSeaDragon from 'components/OpenSeaDragon'
import TitleToolbar from 'components/TitleToolbar'
import NavigationButton from 'components/NavigationButton'
import { shallow } from 'enzyme'

describe('(View) OpenSeaDragonPage', () => {
  let _component
  const _data = { sequences: { 0: { canvases: { 1: {label: 'label', images: {0:{resource: '@id'}}}}}}}

  const _params = {
    sequence: 0,
    canvasId: 1
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

  it('Renders a <TitleToolbar/> component', () => {
    expect(_component.find(TitleToolbar)).to.exist
  })
})
