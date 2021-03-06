import linkBuilder from 'modules/linkBuilder.js'

describe('(Module) linkBuilder', () => {
  const _data = {
    sequences: {
      '0': {
        canvases: [0, 1, 2, 3, 4, 5]
      }
    }
  }

  it('Returns correct results for view: 1', () => {
    const _params = {
      sequence: '0',
      view: '1',
      canvasId: '3'
    }

    let _result = linkBuilder(_data, _params)
    expect(_result.increment).to.equal(1)
    expect(_result.firstPage).to.equal(0)
    expect(_result.lastPage).to.equal(5)
    expect(_result.nextPage).to.equal(4)
    expect(_result.prevPage).to.equal(2)
  })

  it('Returns correct results for view: 2 on an odd page', () => {
    const _params = {
      sequence: '0',
      view: '2',
      canvasId: '3'
    }

    let _result = linkBuilder(_data, _params)
    expect(_result.increment).to.equal(2)
    expect(_result.firstPage).to.equal(0)
    expect(_result.lastPage).to.equal(5)
    expect(_result.nextPage).to.equal(5)
    expect(_result.prevPage).to.equal(1)
  })

  it('Returns correct results for view: 2 on an even page', () => {
    const _params = {
      sequence: '0',
      view: '2',
      canvasId: '4'
    }

    let _result = linkBuilder(_data, _params)
    expect(_result.increment).to.equal(2)
    expect(_result.firstPage).to.equal(0)
    expect(_result.lastPage).to.equal(5)
    expect(_result.nextPage).to.equal(5)
    expect(_result.prevPage).to.equal(2)
  })

  it('Returns correct results for view: 2 on canvasId: 1', () => {
    const _params = {
      sequence: '0',
      view: '2',
      canvasId: '1'
    }

    let _result = linkBuilder(_data, _params)
    expect(_result.prevPage).to.equal(0)
  })

  it('Returns correct results for view: 2 on canvasId: 4(last - 1)', () => {
    const _params = {
      sequence: '0',
      view: '2',
      canvasId: '4'
    }

    let _result = linkBuilder(_data, _params)
    expect(_result.nextPage).to.equal(5)
  })

  it('Returns correct results when passed the optional increment parameter', () => {
    const _params = {
      sequence: '0',
      view: '2',
      canvasId: '3'
    }

    let _result = linkBuilder(_data, _params, 3)
    expect(_result.increment).to.equal(3)
    expect(_result.firstPage).to.equal(0)
    expect(_result.lastPage).to.equal(5)
    expect(_result.nextPage).to.equal(5)
    expect(_result.prevPage).to.equal(0)
  })

  it('Advances 1 at a time when it is continuous', () => {
    const _data_continuous = {
      sequences: {
        '0': {
          canvases: [0, 1, 2, 3, 4, 5],
          viewingHint: 'continuous'
        }
      }
    }
    const _params = {
      sequence: '0',
      view: '2',
      canvasId: '3'
    }
    let _result = linkBuilder(_data_continuous, _params)
    expect(_result.increment).to.equal(1)
    expect(_result.firstPage).to.equal(0)
    expect(_result.lastPage).to.equal(5)
    expect(_result.nextPage).to.equal(4)
    expect(_result.prevPage).to.equal(2)
  })
})
