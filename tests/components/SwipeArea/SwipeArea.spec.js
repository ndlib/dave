import React from 'react'
import SwipeArea from 'components/SwipeArea'
import Swipeable from 'react-swipeable'
import { shallow } from 'enzyme'

describe('(View) SwipeArea', () => {
  let _component
  const _data = {
    sequences: {
      '0': {
        canvases: [0, 1, 2, 3, 4, 5]
      }
    }
  }
  const _params = {
    sequence: '0',
    view: '1',
    canvasId: '3'
  }

  beforeEach(() => {
    _component = shallow(<SwipeArea data={ _data } params={ _params }><div/></SwipeArea>)
  })

  it('Has data, params and children properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
    expect(_component.props().children).to.be.defined
  })

  it('Renders a <Swipeable/> component', () => {
    expect(_component.find(Swipeable)).to.exist
  })
})
