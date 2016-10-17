import targetPath from 'modules/targetPath.js'

describe('(Module) targetPath', () => {

  it('Needs a base and manifest and can guess at the rest', () => {

    const _params = {
      base: '0',
      manifest: 'manifest'
    }

    let _path = targetPath(_params)

    expect(_path).to.equal('/0/manifest/0/g/0')
  })

  it('Takes params and returns a path', () => {

    const _params = {
      base: '0',
      manifest: 'manifest',
      sequence: '0',
      view: '1',
      canvasId: '42'
    }

    let _path = targetPath(_params)

    expect(_path).to.equal('/0/manifest/0/1/42')
  })

  it('Takes params and returns a path with details', () => {

    const _params = {
      base: '10',
      manifest: 'manifest',
      sequence: '0',
      view: '1',
      canvasId: '42',
      detail: 'detail'
    }

    let _path = targetPath(_params)

    expect(_path).to.equal('/10/manifest/0/1/42/detail')
  })
})
