import React from 'react'
import ContentPage from 'components/ContentPage/'
import DigitalArtifact from 'components/DigitalArtifact'
import Metadata from 'components/Metadata'
import Branding from 'components/Branding'
import { shallow } from 'enzyme'

describe('(View) ContentPage', () => {
  let _component
  let _data = {}
  let _params = {}
  beforeEach(() => {
    _component = shallow(<ContentPage data={ _data } params={ _params }/>)
  })

  it('Has a data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a <ContentPage/> with an outer div wrapper', () => {
    expect(_component.find('div')).to.exist
  })

  it('Contains a <DigitalArtifact/> component', () => {
    expect(_component.find(DigitalArtifact)).to.exist
  })

  it('Contains a <Metadata /> component', () => {
    expect(_component.find(Metadata)).to.exist
  })

  it('Contains a <Branding/> component', () => {
    expect(_component.contains(<Branding />)).to.be.true
  })
})
