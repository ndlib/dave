import React from 'react'
import Metadata from 'components/Metadata'
import CanvasMetadata from 'components/CanvasMetadata'
import DocumentMetadata from 'components/DocumentMetadata'
import { shallow } from 'enzyme'

describe('(View) Metadata', () => {
  let _component
  let _data = {}
  let _params = {}

  beforeEach(() => {
    _component = shallow(<Metadata data={_data} params={_params}/>)
  })

  it('Has data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a <CanvasMetadata/> component', () => {
    expect(_component.find(CanvasMetadata)).to.have.length(1)
  })

  it('Renders a <DocumentMetadata/> component', () => {
    expect(_component.find(DocumentMetadata)).to.have.length(1)
  })
})
