import React from 'react'
import GridRow from 'components/GridRow'
import ArtifactImage from 'components/ArtifactImage'
import { shallow } from 'enzyme'

describe('(View) GridRow', () => {
  let _component

  // Rows default to at least 3 canvases
  let _data = {
    sequences: [
       {
        canvases: [
          {
            label: 'label 1',
            images: {
              0: {
                resource: {
                  '@id': '/uri-1/img.png'
                }
              }
            }
          },
          {
            label: 'label 2',
            images: {
              0: {
                resource: {
                  '@id': '/uri-2/img.png'
                }
              }
            }
          },
          {
            label: 'label 3',
            images: {
              0: {
                resource: {
                  '@id': '/uri-3/img.png'
                }
              }
            }
          }
        ]
      }
    ]
  }

  let _params = {
    source: 'source',
    manifest: 'manifest',
    sequence: '0',
    view: 'g',
    canvasId: '0'
  }

  beforeEach(() => {
    _component = shallow(
      <GridRow data={_data} params={_params} />
    )
  })

  it('Has data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Contains a <ArtifactImage/> component', () => {
    expect(_component.find(ArtifactImage)).to.exist
  })
})
