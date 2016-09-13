import React from 'react'
import TwoUpView from 'components/TwoUpView'
import OneUpView from 'components/OneUpView'
import ArtifactImage from 'components/ArtifactImage'
import { shallow } from 'enzyme'

describe('(View) TwoUpView', () => {

  let _component

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
          },
          {
            label: 'label 4',
            images: {
              0: {
                resource: {
                  '@id': '/uri-4/img.png'
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
    view: '2',
    canvasId: '1'
  }

  beforeEach(() => {
    _component = shallow(<TwoUpView data={ _data } params={ _params }/>)
  })

  it('Has a data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders two <ArtifactImage/> components', () => {
    expect(_component.find('ArtifactImage')).to.have.length(2)
  })

  it('Renders the <OneUpView/> on the first page', () => {
    _params.canvasId = '0'
    _component = shallow(<TwoUpView data={ _data } params={ _params }/>)
    expect(_component.find('OneUpView')).to.exist
  })

  it('Renders the <OneUpView/> on the last page with even sequence length', () => {
    _params.canvasId = '3'
    _component = shallow(<TwoUpView data={ _data } params={ _params }/>)
    expect(_component.find('OneUpView')).to.exist
  })

  it('Renders two <ArtifactImage/> components on the last page with even sequence length', () => {
    let _altData = {
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
    _params.canvasId = '2'
    _component = shallow(<TwoUpView data={ _data } params={ _params }/>)
    expect(_component.find('ArtifactImage')).to.have.length(2)
  })

})
