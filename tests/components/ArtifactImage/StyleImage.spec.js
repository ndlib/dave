import StyleImage from 'components/ArtifactImage/StyleImage.js'

describe('(Module) StyleImage', () => {
  it('Returns height: 100% for portrait', () => {
    let _portrait = true
    let _align = ''
    let _imgStyle = StyleImage(_portrait, _align)
    expect(_imgStyle.height).to.equal('100%')
  })

  it('Returns width: 100% for non-portrait', () => {
    let _portrait = false
    let _align = ''
    let _imgStyle = StyleImage(_portrait, _align)
    expect(_imgStyle.width).to.equal('100%')
  })

  it('Returns correct style for align = left', () => {
    let _portrait = true
    let _align = 'left'
    let _imgStyle = StyleImage(_portrait, _align)
    expect(_imgStyle.height).to.equal('100%')
    expect(_imgStyle.left).to.equal('auto')
    expect(_imgStyle.right).to.equal('0')
    expect(_imgStyle.transform).to.equal('translate(0, 0)')
  })

  it('Returns correct style for align = right', () => {
    let _portrait = true
    let _align = 'right'
    let _imgStyle = StyleImage(_portrait, _align)
    expect(_imgStyle.height).to.equal('100%')
    expect(_imgStyle.left).to.equal('0')
    expect(_imgStyle.right).to.equal('auto')
    expect(_imgStyle.transform).to.equal('translate(0, 0)')
  })

  it('Returns only the height or width when alignment is not left or right', () => {
    let _portrait = true
    let _align = 'center'
    let _imgStyle = StyleImage(_portrait, _align)
    expect(_imgStyle.height).to.equal('100%')
    expect(_imgStyle.left).to.not.exist
    expect(_imgStyle.right).to.not.exist
    expect(_imgStyle.transform).to.not.exist
  })
})
