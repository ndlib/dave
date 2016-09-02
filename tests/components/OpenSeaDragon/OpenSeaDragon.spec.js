import React from 'react'
import OpenSeaDragon from 'components/OpenSeaDragon'
import OpenSeaDragonControls from 'components/OpenSeaDragonControls'
import OpenSeaDragonNavigator from 'components/OpenSeaDragonNavigator'
import { shallow } from 'enzyme'

describe('(View) OpenSeaDragon', () => {
  let _component
  let _image = {}

  beforeEach(() => {
    _component = shallow(<OpenSeaDragon image={_image}/>)
  })

  it('Has an image property', () => {
    expect(_component.props().image).to.be.defined
  })

  it('Renders a <OpenSeaDragonControls/> component', () => {
      expect(_component.find(OpenSeaDragonControls)).to.exist
  })

  it('Renders a <OpenSeaDragonNavigator/> component', () => {
      expect(_component.find(OpenSeaDragonNavigator)).to.exist
  })

})
