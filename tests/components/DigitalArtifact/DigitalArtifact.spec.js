import React from 'react'
import DigitalArtifact from 'components/DigitalArtifact'
import TitleToolbar from 'components/TitleToolbar'
import CurrentView from 'components/CurrentView'
import SecondaryToolbar from 'components/SecondaryToolbar'
import { shallow } from 'enzyme'

describe('(View) DigitalArtifact', () => {
  let _component
  let _data = {}
  let _params = {}

  beforeEach(() => {
    _component = shallow(
      <DigitalArtifact data={ _data } params={ _params }/>)
  })

  it('Has data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a <TitleToolbar/> component', () => {
    expect(_component.find(TitleToolbar)).to.exist
  })

  it('Renders a <CurrentView/> component', () => {
    expect(_component.find(CurrentView)).to.exist
  })

  it('Renders a <SecondaryToolbar/> component', () => {
    expect(_component.find(SecondaryToolbar)).to.exist
  })

})
