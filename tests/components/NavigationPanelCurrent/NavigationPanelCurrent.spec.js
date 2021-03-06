import React from 'react'
import NavigationPanelCurrent from 'components/NavigationPanelCurrent'
import { shallow } from 'enzyme'

describe('(View) NavigationPanelCurrent', () => {
  let _component
  const _data = {
    sequences: {
      0: {
        canvases: [0, 1, 2, 3, 4, 5]
      }
    }
  }
  const _params = {
    source: 'source',
    manifest: 'manifest',
    sequence: '0',
    view: '1',
    canvasId: '3'
  }

  beforeEach(() => {
    _component = shallow(<NavigationPanelCurrent data={ _data } params={ _params }
      />)
  })

  it('Renders human readable page X of Y', () => {
    expect(_component.text()).to.contain('/ 6')
  })

  it('Renders a <select/> component.', () => {
    expect(_component.find('select')).to.exist
  })

  it('Renders 6 <option/> components', () => {
    expect(_component.find('option')).to.have.length(6)
  })
})
