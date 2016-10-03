import React from 'react'
import OpenSeaDragonControls from 'components/OpenSeaDragonControls'
import OpenSeaDragonButton from 'components/OpenSeaDragonButton'
import OpenSeaDragonResetButton from 'components/OpenSeaDragonResetButton'
import { shallow } from 'enzyme'

describe('(View) OpenSeaDragonControls', () => {
  let _component

  it('Renders creates an unordered list', () => {
    _component = shallow(<OpenSeaDragonControls />)
    expect(_component.find('ul')).to.have.lengthOf(1)
  })

  it('Renders five <OpenSeaDragonButton/> and one <OpenSeaDragonResetButton /> component on desktop', () => {
    global.navigator = {
      userAgent: null
    };
    _component = shallow(<OpenSeaDragonControls />)
    expect(_component.find(OpenSeaDragonButton)).to.have.lengthOf(5)
    expect(_component.find(OpenSeaDragonResetButton)).to.have.lengthOf(1)
  })

  it('Renders two <OpenSeaDragonButton/> and one <OpenSeaDragonResetButton /> component on mobile', () => {
    global.navigator = {
      userAgent: 'iPad'
    };
    _component = shallow(<OpenSeaDragonControls />)
    expect(_component.find(OpenSeaDragonButton)).to.have.lengthOf(2)
    expect(_component.find(OpenSeaDragonResetButton)).to.have.lengthOf(1)
  })


})
