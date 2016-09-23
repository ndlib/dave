import React from 'react'
import ViewSelectionButton from 'components/ViewSelectionButton'
import { FontIcon } from 'material-ui'
import { Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(View) ViewSelectionButton', () => {
  let _component

  const _params = {
    view: '1'
  }
  const _view = '1'
  const _icon = 'icon'

  beforeEach(() => {
    _component = shallow(<ViewSelectionButton params={_params} icon={_icon} view={_view}/>)
  })
  
  it('Has params, icon, and view properties', () => {
    expect(_component.props().params).to.be.defined
    expect(_component.props().icon).to.be.defined
    expect(_component.props().view).to.be.defined

  })
  it('Renders a <Link/> components', () => {
    expect(_component.find('Link')).to.exist
  })

  it('Renders a <FontIcon/> components', () => {
    expect(_component.find('FontIcon')).to.exist
  })
})
