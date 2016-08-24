import targetPath from 'modules/targetPath.js'

describe('(Module) targetPath', () => {

  it('Needs a source and manifest and can guess at the rest', () => {

    const _params = {
      source: 'source',
      manifest: 'manifest'
    }

    let _path = targetPath(_params)

    expect(_path).to.equal('/source/manifest/0/g/0')
  })
  it('Takes params and returns a path', () => {

    const _params = {
      source: 'source',
      manifest: 'manifest',
      sequence: '0',
      view: '1',
      pageId: '42'
    }

    let _path = targetPath(_params)

    expect(_path).to.equal('/source/manifest/0/1/42')
  })

  it('Takes params and returns a path with details', () => {

    const _params = {
      source: 'source',
      manifest: 'manifest',
      sequence: '0',
      view: '1',
      pageId: '42',
      detail: 'detail'
    }

    let _path = targetPath(_params)

    expect(_path).to.equal('/source/manifest/0/1/42/detail')
  })
})
