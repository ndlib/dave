import StyleImage from 'components/ArtifactImage/StyleImage.js'

describe('(Module) StyleImage', () => {

  it('Returns correct style for align = left', () => {
    let _align = 'left'
    let _imgStyle = StyleImage(_align)
    expect(_imgStyle.maxHeight).to.equal('100%')
    expect(_imgStyle.maxWidth).to.equal('100%')
    expect(_imgStyle.top).to.equal('0')
    expect(_imgStyle.bottom).to.equal('0')
    expect(_imgStyle.margin).to.equal('auto')
    expect(_imgStyle.left).to.equal('auto')
    expect(_imgStyle.right).to.equal('0')
    expect(_imgStyle.transform).to.equal('translate(0, 0)')
  })

  it('Returns correct style for align = right', () => {
    let _align = 'right'
    let _imgStyle = StyleImage(_align)
    expect(_imgStyle.maxHeight).to.equal('100%')
    expect(_imgStyle.maxWidth).to.equal('100%')
    expect(_imgStyle.top).to.equal('0')
    expect(_imgStyle.bottom).to.equal('0')
    expect(_imgStyle.margin).to.equal('auto')
    expect(_imgStyle.left).to.equal('0')
    expect(_imgStyle.right).to.equal('auto')
    expect(_imgStyle.transform).to.equal('translate(0, 0)')
  })

  it('Returns only the height or width when alignment is not left or right', () => {
    let _align = 'center'
    let _imgStyle = StyleImage(_align)
    expect(_imgStyle.maxHeight).to.equal('100%')
    expect(_imgStyle.maxWidth).to.equal('100%')
    expect(_imgStyle.top).to.equal('0')
    expect(_imgStyle.bottom).to.equal('0')
    expect(_imgStyle.margin).to.equal('auto')
    expect(_imgStyle.left).to.not.exist
    expect(_imgStyle.right).to.not.exist
    expect(_imgStyle.transform).to.not.exist
  })
})
