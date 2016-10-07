import React from 'react'
import NavigationButton from 'components/NavigationButton'
import { FontIcon } from 'material-ui'
import { Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(View) NavigationButton', () => {
  let _component
  let _data = {
    sequences:[{canvases: [{},{}]}]
  }
  let _params = {
    sequence: 0
  }

  beforeEach(() => {
    _component = shallow(
      <NavigationButton
        data={ _data }
        params={ _params }
        target='someplace'
        icon='icon'
      />
    )
  })

  it('Has params, target and icon properties', () => {
    expect(_component.props().params).to.be.defined
    expect(_component.props().target).to.be.defined
    expect(_component.props().icon).to.be.defined
  })

  it('Returns a Link to a target page', () => {
    expect(_component.find(Link)).to.exist
  })

  it('Contains a material-icon', () => {
    expect(_component.find(FontIcon)).to.exist
  })
})
