import React from 'react'
import OpenSeaDragonControls from 'components/OpenSeaDragonControls'
import OpenSeaDragonButton from 'components/OpenSeaDragonButton'
import { shallow } from 'enzyme'

describe('(View) OpenSeaDragonControls', () => {
  let _component

  it('Renders creates an unordered list', () => {
    _component = shallow(<OpenSeaDragonControls />)
    expect(_component.find('ul')).to.have.lengthOf(1)
  })

  it('Renders six <OpenSeaDragonButton/> components on desktop', () => {
    global.navigator = {
      userAgent: null
    };
    _component = shallow(<OpenSeaDragonControls />)
    expect(_component.find(OpenSeaDragonButton)).to.have.lengthOf(6)

  })

  it('Renders three <OpenSeaDragonButton/> components on mobile', () => {
    global.navigator = {
      userAgent: 'iPad'
    };
    _component = shallow(<OpenSeaDragonControls />)
    expect(_component.find(OpenSeaDragonButton)).to.have.lengthOf(3)
  })


})
