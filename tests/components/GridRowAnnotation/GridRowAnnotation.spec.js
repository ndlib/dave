import React from 'react'
import GridRowAnnotation from 'components/GridRowAnnotation'
import { shallow } from 'enzyme'

describe('(View) GridRowAnnotation', () => {
  let _component

  let _start = 10
  let _end = 13

  beforeEach(() => {
    _component = shallow(
      <GridRowAnnotation start={_start} end={_end} />
    )
  })

  it('Has start and end properties', () => {
    expect(_component.props().start).to.be.defined
    expect(_component.props().end).to.be.defined
  })

  it('Has text based on the start and end values', () => {
    let _caption = _component.text()
    expect(_caption).to.contain(_start)
    expect(_caption).to.contain(_end)
  })
})
