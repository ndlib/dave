import buildArtifactImage from 'modules/buildArtifactImage.js'

describe('(Module) buildArtifactImage', () => {

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
          },
          4: {
            label: 'label 2',
            images: {
              0: {
                resource: {
                  '@id': '/uri-2/img.png'
                }
              }
            }
          }
        }
      }
    }
  }
  const _params = {
    sequence: '0',
    pageId: '2',
  }

  it('Returns the current image by default', () => {
    let _img = buildArtifactImage(_data, _params)
    expect(_img.pageId).to.equal(2)
    expect(_img.alt).to.equal('label 1')
    expect(_img.imageUri).to.equal('/uri-1/img.png')
  })

  it('Returns the current image when passed 0', () => {
    let _img = buildArtifactImage(_data, _params, 0)
    expect(_img.pageId).to.equal(2)
    expect(_img.alt).to.equal('label 1')
    expect(_img.imageUri).to.equal('/uri-1/img.png')
  })

  it('Returns the correct image when passed any other number', () => {
    let _img = buildArtifactImage(_data, _params, 2)
    expect(_img.pageId).to.equal(4)
    expect(_img.alt).to.equal('label 2')
    expect(_img.imageUri).to.equal('/uri-2/img.png')
  })
})
