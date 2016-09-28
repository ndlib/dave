import buildKeyPairs from 'modules/buildKeyPairs'

describe('(Module) buildKeyPairs', () => {
  let _metadata, _result

  beforeEach(() => {
    _metadata = [
      {label: 'Label 1', value: 'Value 1'},
      {label: 'Label 2', value: 'Value 2'},
      {label: 'Label 3', value: ['Value 3a', 'Value 3b']}
    ]
    _result = buildKeyPairs(_metadata)
  })

  it('Returns an array of length 7', () => {
    expect(_result).to.have.length(7)
  })
})
