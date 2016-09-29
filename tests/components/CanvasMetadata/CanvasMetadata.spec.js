import React from 'react'
import CanvasMetadata from 'components/CanvasMetadata'
import KeyPairMetadata from 'components/KeyPairMetadata'
import { shallow } from 'enzyme'

describe('(View) CanvasMetadata', () => {
  let _component
  let _data = {
    sequences: [{ canvases: [{},{},{},{},{}]}],
    metadata: [{label: 'Label', value: 'Value'}, {}],
    label: 'Not technically in metadata'
  }
  let _params = {
    sequence: '0',
    canvasId: '0',
    view: '1'
  }
  beforeEach(() => {
    _component = shallow(<CanvasMetadata data={_data} params={_params}/>)
  })

  it('Has data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a title', () => {
    expect(_component.find('h2')).to.have.length(1)
  })

  it('Renders a <KeyPairMetadata/> component', () => {
    expect(_component.find(KeyPairMetadata)).to.have.length(1)
  })

  it('Returns null on grid view', () => {
    _params = {
      sequence: '0',
      canvasId: '0',
      view: 'g'
    }
    _component = shallow(<CanvasMetadata data={_data} params={_params}/>)
    expect(_component.html()).to.equal(null)
  })

  it('Renders 1 <KeyPairMetadata/> component on two up page for canvasID = 0', () => {
    _params = {
      sequence: '0',
      canvasId: '0',
      view: '2'
    }
    _component = shallow(<CanvasMetadata data={_data} params={_params}/>)
    expect(_component.find(KeyPairMetadata)).to.have.length(1)
  })

  it('Renders 2 <KeyPairMetadata/> components on two up page', () => {
    _params = {
      sequence: '0',
      canvasId: '1',
      view: '2'
    }
    _component = shallow(<CanvasMetadata data={_data} params={_params}/>)
    expect(_component.find(KeyPairMetadata)).to.have.length(2)
  })

  it('Renders 2 <KeyPairMetadata/> components on two up page', () => {
    _params = {
      sequence: '0',
      canvasId: '2',
      view: '2'
    }
    _component = shallow(<CanvasMetadata data={_data} params={_params}/>)
    expect(_component.find(KeyPairMetadata)).to.have.length(2)
  })

  it('Renders 2 <KeyPairMetadata/> components on two up page for last canvasID with odd length', () => {
    _params = {
      sequence: '0',
      canvasId: '4',
      view: '2'
    }
    _component = shallow(<CanvasMetadata data={_data} params={_params}/>)
    expect(_component.find(KeyPairMetadata)).to.have.length(2)
  })
  it('Renders 1 <KeyPairMetadata/> component on two up page for last canvasID with even length', () => {
    _data = {
      sequences: [{ canvases: [{},{},{},{},{},{}]}],
      metadata: [{label: 'Label', value: 'Value'}, {}],
      label: 'Not technically in metadata'
    }
    _params = {
      sequence: '0',
      canvasId: '5',
      view: '2'
    }
    _component = shallow(<CanvasMetadata data={_data} params={_params}/>)
    expect(_component.find(KeyPairMetadata)).to.have.length(1)
  })

})
