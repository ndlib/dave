import React from 'react'
import KeyPairMetadata from 'components/KeyPairMetadata'
import { shallow } from 'enzyme'

describe('(View) KeyPairMetadata', () => {
  let _component
  let _metadata = [
    {label: 'Label 1', value: 'Value 1'},
    {label: 'Label 2', value: 'Value 2'},
    {label: 'Label 3', value: ['Value 3a', 'Value 3b']}
  ]
  beforeEach(() => {
    _component = shallow(<KeyPairMetadata metadata={_metadata}/>)
  })

  it('Has a metadata property', () => {
    expect(_component.props().metadata).to.be.defined
  })

  it('Renders a <dl> tag', () => {
    expect(_component.find('dl')).to.exist
  })

  it('Renders 3 <dt> and 4 <dd> tags', () => {
    expect(_component.find('dt')).to.have.length(3)
    expect(_component.find('dd')).to.have.length(4)
  })

  it('Returns null when metadata is null', () => {
    _metadata = null
    _component = shallow(<KeyPairMetadata metadata={_metadata}/>)
    expect(_component.find('dl')).to.not.exist
    expect(_component.html()).to.equal(null)
  })
})
