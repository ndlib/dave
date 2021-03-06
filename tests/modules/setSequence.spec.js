import setSequence from 'modules/setSequence.js'

describe('(Module) setSequence', () => {
  const _params = {
    base: '1',
    manifest: 'manifest',
    sequence: '0',
    view: '1',
    canvasId: '42'
  }

  it('Changes sequence and defaults to the first page', () => {
    const _targetSequence = '2'
    let _path = setSequence(_params, _targetSequence)
    expect(_path).to.equal('/1/manifest/2/1/0')
  })

  it('Changes sequence and goes to a target page', () => {
    const _targetSequence = '3'
    const _targetPage = '4'
    let _path = setSequence(_params, _targetSequence, _targetPage)
    expect(_path).to.equal('/1/manifest/3/1/4')
  })
})
