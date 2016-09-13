import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { Link } from 'react-router'
import { FontIcon, Toolbar, ToolbarGroup } from 'material-ui'
import Branding from 'components/Branding/'
import { shallow } from 'enzyme'

describe('(View) Home', () => {

  let _component

  beforeEach(() => {
    _component = shallow(<HomeView />)
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('div')
  })

})
