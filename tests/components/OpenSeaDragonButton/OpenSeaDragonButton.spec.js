import React from 'react'
import OpenSeaDragonButton from 'components/OpenSeaDragonButton'
import { FontIcon } from 'material-ui'
import { shallow } from 'enzyme'

describe('(View) OpenSeaDragonButton', () => {
  let _component
  let _id = 'id'
  let _icon = 'icon'

  beforeEach(() => {
    _component = shallow(<OpenSeaDragonButton id={ _id } icon={ _icon }/>)
  })


  it('Has a data and params properties', () => {
    expect(_component.props().id).to.be.defined
    expect(_component.props().icon).to.be.defined
  })

  it('Renders a <li> tag, a <a> tag and a <FontIcon/> component', () => {
    expect(_component.find('li')).to.have.lengthOf(1)
    expect(_component.find('a')).to.have.lengthOf(1)
    expect(_component.find(FontIcon)).to.exist
  })
})
