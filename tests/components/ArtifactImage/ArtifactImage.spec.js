import React from 'react'
import ArtifactImage from 'components/ArtifactImage'
import { Link } from 'react-router'
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

  it('Renders a <Link/> component', () => {
    const linkTag = _component.find('Link')
    expect(linkTag).to.exist
    expect(linkTag.props('to')).to.exist

  })

  it('Renders an image', () => {
    expect(_component.find('img')).to.have.length(1);
  })
})
