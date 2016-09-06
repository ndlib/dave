import React from 'react'
import OpenSeaDragonNavigator from 'components/OpenSeaDragonNavigator'
import { shallow } from 'enzyme'

describe('(View) OpenSeaDragonNavigator', () => {
  let _component


  it('Does not render on mobile', () => {
    global.navigator = {
      userAgent: 'iPad'
    };
    _component = shallow(<OpenSeaDragonNavigator />)
    expect(_component.find('div')).to.not.exist
  })

  it('Renders on desktop', () => {
    global.navigator = {
      userAgent: null
    };
    _component = shallow(<OpenSeaDragonNavigator />)
    expect(_component.find('div')).to.exist

  })

})
