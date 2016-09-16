import React from 'react'
import Drawer from 'components/Drawer'
import SpringScrollbars from 'react-custom-scrollbars'
import { shallow } from 'enzyme'

describe('(View) Drawer', () => {
  let _component
  let _data = {
    sequences: {0: {canvases: [
      {
        images: {0: {resource: {'@id': ''}}}
      }, {
        images: {0: {resource: {'@id': ''}}}
      }, {
        images: {0: {resource: {'@id': ''}}}
      }
    ]}}
  }
  let _params = {
    sequence: '0',
    canvasId: '1'
  }

  it('Has data and params properties', () => {
    _params.view = '1'
    _component = shallow(<Drawer data={ _data } params={ _params } />)
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a <SpringScrollbars/> component', () => {
    _params.view = '1'
    _component = shallow(<Drawer data={ _data } params={ _params } />)
    expect(_component.find(SpringScrollbars)).to.exist
  })
  
  it('Does not render for grid view', () => {
    _params.view = 'g'
    _component = shallow(<Drawer data={ _data } params={ _params } />)
    expect(_component.find('div')).to.have.length(0)
  })
})
