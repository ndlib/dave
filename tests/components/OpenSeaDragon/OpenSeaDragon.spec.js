import React from 'react'
import OpenSeaDragon from 'components/OpenSeaDragon'
import OpenSeaDragonControls from 'components/OpenSeaDragonControls'
import OpenSeaDragonNavigator from 'components/OpenSeaDragonNavigator'
import { CircularProgress } from 'material-ui'
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

  it('Renders a <CircularProgress/> component before loading', () => {
    expect(_component.find(CircularProgress)).to.exist
  })
  it('Renders a <OpenSeaDragonControls/> component after loading', () => {
    _component.setState({loading: false})
    expect(_component.find(OpenSeaDragonControls)).to.exist
  })

  it('Renders a <OpenSeaDragonNavigator/> component after loading', () => {
    _component.setState({loading: false})
    expect(_component.find(OpenSeaDragonNavigator)).to.exist
  })

})
