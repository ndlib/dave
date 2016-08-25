import React from 'react'
import NavigationPanel from 'components/NavigationPanel'
import NavigationButton from 'components/NavigationButton'
import NavigationPanelCurrent from 'components/NavigationPanelCurrent'
import { ToolbarGroup } from 'material-ui'
import { shallow } from 'enzyme'

describe('(View) NavigationPanel', () => {
  let _component
  let _data = {
    sequences: {
      '1': {canvases: [0,1,2]}
    }
  }
  let _params = {
    view: '1',
    sequence: '1'
  }

  beforeEach(() => {
    _component = shallow(<NavigationPanel data={ _data } params={ _params }/>)
  })

  it('Has data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a <ToolbarGroup/> component', () => {
    expect(_component.find(ToolbarGroup)).to.exist
  })

  it('Renders 4 <NavigationButton/> components', () => {
    expect(_component.find('NavigationButton')).to.have.lengthOf(4);
  })

  it('Renders a <NavigationPanelCurrent/> component', () => {
    expect(_component.find('NavigationPanelCurrent')).to.exist
  })

  it('Does not render for the grid view', () => {
    let params = { view: 'g' }
    let component = shallow(<NavigationPanel data={ _data } params={ params }/>)
    expect(component.find(ToolbarGroup)).to.not.exist
    expect(component.find('NavigationButton')).to.have.lengthOf(0)
    expect(component.find('NavigationPanelCurrent')).to.not.exist
  })
})
