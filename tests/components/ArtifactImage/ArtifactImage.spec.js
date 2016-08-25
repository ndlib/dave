import React from 'react'
import ArtifactImage from 'components/ArtifactImage'
import { shallow } from 'enzyme'

describe('(View) ArtifactImage', () => {
  let _component
  let _imageObject = {
    imageUri: 'http://www.google.com/image.png',
    alt: 'Some alt text',
  }

  beforeEach(() => {
    _component = shallow(<ArtifactImage imageObject={ _imageObject }/>)
  })

  it('Has an imageObject property', () => {
      expect(_component.props().imageObject).to.be.defined
  })

  it('Renders an image', () => {
    const image = _component.find('img')
    expect(_component.find('img')).to.have.length(1);
    //expect(image.src).to.be.equalTo(_imageObject.imageUri)
  })
})
