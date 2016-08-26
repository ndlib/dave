import React from 'react'
import OneUpView from 'components/OneUpView'
import ArtifactImage from 'components/ArtifactImage'
import { shallow } from 'enzyme'

describe('(View) OneUpView', () => {
  let _component
  const _data = {
    sequences: {
      0: {
        canvases: {
          2: {
            label: 'label 1',
            images: {
              0: {
                resource: {
                  '@id': '/uri-1/img.png'
                }
              }
            }
          }
        }
      }
    }
  }
  const _params = {
    source: 'source',
    manifest: 'manifest',
    sequence: '0',
    view: '1',
    pageId: '2'
  }
  beforeEach(() => {
    _component = shallow(<OneUpView data={ _data } params={ _params }/>)
  })

  it('Has a data and params properties', () => {
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a single <ArtifactImage/> component', () => {
    expect(_component.find('ArtifactImage')).to.have.length(1)
  })
})
