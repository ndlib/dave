import React from 'react'
import Page from 'components/Page/'
import DigitalArtifact from 'components/DigitalArtifact'
import Metadata from 'components/Metadata'
import Branding from 'components/Branding'
import { shallow } from 'enzyme'

describe('(View) Page', () => {
  let _page
  let _data = {}
  let _params = {}
  beforeEach(() => {
    _page = shallow(<Page data={ _data } params={ _params }/>)
  })

  it('Has a data and params properties', () => {
    expect(_page.props().data).to.be.defined
    expect(_page.props().params).to.be.defined
  })
  
  it('Renders a <Page/> with an outer div wrapper', () => {
    expect(_page.find('div')).to.exist
  })

  it('Contains a <DigitalArtifact/> component', () => {
    expect(_page.find(DigitalArtifact)).to.exist
  })

  it('Contains a <Metadata /> component', () => {
    expect(_page.find(Metadata)).to.exist
  })

  it('Contains a <Branding/> component', () => {
    expect(_page.contains(<Branding />)).to.be.true
  })
})
