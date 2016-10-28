import isContinuous from 'modules/isContinuous'

describe('(Module) isContinuous', () => {
  let _result
  let _params = {
    sequence: '0'
  }

  it('Returns true if the viewingHint property is set to "continuous"', () => {
    let _data = {
      sequences: {
        '0': {
          viewingHint: 'continuous'
        }
      }
    }
    _result = isContinuous(_data, _params)
    expect(_result).to.equal(true)
  })

  it('Returns false if the viewingHint property is not present', () => {
    let _data = {
      sequences: {
        '0': {
        }
      }
    }
    _result = isContinuous(_data, _params)
    expect(_result).to.equal(false)
  })

  it('Returns false if the viewingHint property is present, but not "continuous"', () => {
    let _data = {
      sequences: {
        '0': {
          viewingHint: 'party time'
        }
      }
    }
    _result = isContinuous(_data, _params)
    expect(_result).to.equal(false)
  })
})
