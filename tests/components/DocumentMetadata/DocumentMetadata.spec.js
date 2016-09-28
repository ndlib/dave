import React from 'react'
import DocumentMetadata from 'components/DocumentMetadata'
import KeyPairMetadata from 'components/KeyPairMetadata'
import { shallow } from 'enzyme'

describe('(View) DocumentMetadata', () => {
  let _component
  let _data = {
    metadata: [{label: 'Label', value: 'Value'}],
    label: 'Not technically in metadata'
  }
  let _params = {}
  beforeEach(() => {
    _component = shallow(<DocumentMetadata data={_data} params={_params}/>)
  })

  it('Has data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a title', () => {
    expect(_component.find('h2')).to.exist
  })

  it('Renders a <KeyPairMetadata/> component', () => {
    expect(_component.find(KeyPairMetadata)).to.exist
    
  })

})
