import additionalMetadata from 'modules/additionalMetadata'

describe('(Module) additonalMetadata', () => {
  let _result, _data

  it('Returns an empty array when no data passed', () => {
    _data = {}
    _result = additionalMetadata(_data)
    expect(_result).to.have.length(0)
  })

  it('Returns an array of length 4', () => {
    _data = {
      label: 'label',
      description: 'description',
      license: 'license',
      attribution: 'attribution'
    }
    _result = additionalMetadata(_data)
    expect(_result).to.have.length(4)
  })

  it('Returns an array of length 4', () => {
    _data = {
      label: 'label',
      description: 'description',
      somethingelse: 'somethingelse'
    }
    _result = additionalMetadata(_data)
    expect(_result).to.have.length(2)
  })
})
