import targetSequence from 'components/SequenceSelector/modules/targetSequence.js'

describe('(Module) targetSequence', () => {
  const _data = {
    sequences: [
      {
        startCanvas: 'http://google.com/canvas/3',
        canvases: [
          {'@id': 'http://google.com/wrong'},
          {'@id': 'http://google.com/wrong'},
          {'@id': 'http://google.com/canvas/3'}
        ]
      }
    ]

  }
  const _params = {
    source: 'source',
    manifest: 'manifest',
    sequence: '2',
    view: '1',
    canvasId: '42'
  }
  const _targetSequence = '0'

  it('Changes sequence and and sets start page', () => {

    let _path = targetSequence(_data, _params, _targetSequence)
    expect(_path).to.equal('/source/manifest/0/1/2')
  })
})
