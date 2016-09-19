import React from 'react'
import { FontIcon } from 'material-ui'
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

  it('Renders two buttons', () => {
    _params.view = '2'
    _component = shallow(<Drawer data={ _data } params={ _params } />)
    expect(_component.find('button')).to.have.length(2)
    expect(_component.find(FontIcon)).to.have.length(2)
  })

  it('Does not render for grid view', () => {
    _params.view = 'g'
    _component = shallow(<Drawer data={ _data } params={ _params } />)
    expect(_component.find('div')).to.have.length(0)
  })


})
