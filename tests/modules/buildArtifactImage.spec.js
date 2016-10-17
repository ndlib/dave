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
    base: '1',
    manifest: 'manifest',
    sequence: '0',
    view: '1',
    canvasId: '2',
  }

  it('Returns the current image by default', () => {
    let _img = buildArtifactImage(_data, _params)
    expect(_img.canvasId).to.equal(2)
    expect(_img.alt).to.equal('label 1')
    expect(_img.imageUri).to.equal('/uri-1/img.png')
    expect(_img.objectLink).to.equal('/1/manifest/0/1/2/detail')
  })

  it('Returns the current image when passed 0', () => {
    let _img = buildArtifactImage(_data, _params, 0)
    expect(_img.canvasId).to.equal(2)
    expect(_img.alt).to.equal('label 1')
    expect(_img.imageUri).to.equal('/uri-1/img.png')
    expect(_img.objectLink).to.equal('/1/manifest/0/1/2/detail')
  })

  it('Returns the correct image when passed any other number', () => {
    let _img = buildArtifactImage(_data, _params, 2)
    expect(_img.canvasId).to.equal(4)
    expect(_img.alt).to.equal('label 2')
    expect(_img.imageUri).to.equal('/uri-2/img.png')
    expect(_img.objectLink).to.equal('/1/manifest/0/1/4/detail')
  })

})
