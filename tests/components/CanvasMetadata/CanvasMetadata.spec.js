import React from 'react'
import CanvasMetadata from 'components/CanvasMetadata'
import KeyPairMetadata from 'components/KeyPairMetadata'
import { shallow } from 'enzyme'

describe('(View) CanvasMetadata', () => {
  let _component
  let _data = {
    sequences: [{ canvases: [{}]}],
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

})
