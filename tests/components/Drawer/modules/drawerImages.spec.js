import React from 'react'
import drawerImages from 'components/Drawer/modules/drawerImages.js'
import ArtifactImage from 'components/ArtifactImage'
import { shallow } from 'enzyme'

describe('(Module) drawImages', () => {
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
    canvasId: '1',
    view: '1'
  }

  let _drawerImages = drawerImages(_data, _params)

  it('Returns an Array of length 3', () => {
    expect(_drawerImages).to.have.length(3)
  })

})
