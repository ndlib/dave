import React from 'react'
import Branding from 'components/Branding'
import { shallow } from 'enzyme'

describe('(View) Branding', () => {
  let _component

  beforeEach(() => {
    _component = shallow(<Branding />)
  })

  it('Contains a link', () => {
    const aTag = _component.find('a')
    expect(aTag).to.exist
  })

  it('Contains an <img/>', () => {
    const image = _component.find('img')
    expect(image).to.exist
  })
})
