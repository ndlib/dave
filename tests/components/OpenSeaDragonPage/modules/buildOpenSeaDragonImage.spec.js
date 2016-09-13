import buildOpenSeaDragonImage from 'components/OpenSeaDragonPage/modules/buildOpenSeaDragonImage.js'

describe('(Module) buildOpenSeaDragonImage', () => {

  const _data = { sequences: { 0: { canvases: { 1: {label: 'label', images: {0:{resource: {'@id': 'http://google.com/image.jpg'}}}}}}}}

  const _params = {
    source: 'source',
    manifest: 'manifest',
    sequence: '0',
    view: '1',
    canvasId: '1'
  }

  const _img = buildOpenSeaDragonImage(_data, _params)

  it('Returns a closeUri, imageUri, and label for an OpenSeaDragon image', () => {
    expect(_img.closeUri).to.equal('/source/manifest/0/1/1');
    expect(_img.imageUri).to.equal('http://google.com/image.jpg');
    expect(_img.label).to.equal('label');
  })
})
