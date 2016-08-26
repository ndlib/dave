import React from 'react'
import SecondaryToolbar from 'components/SecondaryToolbar'
import ViewSelectionPanel from 'components/ViewSelectionPanel'
import NavigationPanel from 'components/NavigationPanel'
import { Toolbar } from 'material-ui'
import { shallow } from 'enzyme'

describe('(View) SecondaryToolbar', () => {
  let _component
  const _data = {}
  const _params = {}

  beforeEach(() => {
    _component = shallow(<SecondaryToolbar data={ _data } params={ _params }/>)
  })

  it('Has a data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a <Toolbar/> component', () => {
    expect(_component.find(Toolbar)).to.exist
  })

  it('Renders a <ViewSelectionPanel/> component', () => {
    expect(_component.find(ViewSelectionPanel)).to.exist
  })

  it('Renders a <NavigationPanel/> component', () => {
    expect(_component.find(NavigationPanel)).to.exist
  })
})
