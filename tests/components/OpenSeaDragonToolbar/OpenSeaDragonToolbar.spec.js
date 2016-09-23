import React from 'react'
import { Link } from 'react-router'
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui'
import OpenSeaDragonToolbar from 'components/OpenSeaDragonToolbar'
import { shallow } from 'enzyme'

describe('(View) OpenSeaDragonToolbar', () => {
  let _component
  let _image = {
    closeUri: '/1/2/3',
    imageUri: 'http://something.com/image.png',
    label: 'label text'
  }
  beforeEach(() => {
    _component = shallow(<OpenSeaDragonToolbar image={_image} />)
  })

  it('Has an image property', () => {
    expect(_component.props().image).to.be.defined
  })

  it('Renders a <Toolbar/> with a <ToolbarTitle/>', () => {
    expect(_component.find(Toolbar)).to.exist
    expect(_component.find(ToolbarTitle)).to.exist
  })

  it('Renders a <Toolbar/> with two <ToolbarGroup/> components', () => {
    expect(_component.find(Toolbar)).to.exist
    expect(_component.find(ToolbarGroup)).have.lengthOf(2)
  })

  it('Renders a <Link/> component', () => {
    expect(_component.find(Link)).to.exist
  })
})
