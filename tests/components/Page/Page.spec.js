import React from 'react'
import Page from 'components/Page/'
import ContentPage from 'components/ContentPage'
import OpenSeaDragonPage from 'components/OpenSeaDragonPage'
import { shallow } from 'enzyme'

describe('(View) Page', () => {
  let _component
  let _data = {}
  let _params = {}
  let _paramsDetail = {
    detail: 'detail'
  }
  it('Has a data and params properties', () => {
    _component = shallow(<Page data={ _data } params={ _params } />)
    expect(_component.props().data).to.be.defined
    expect(_component.props().params).to.be.defined
  })

  it('Renders a <ContentPage/> component by default', () =>{
    _component = shallow(<Page data={ _data } params={ _params } />)
    expect(_component.find('ContentPage')).to.exist
    expect(_component.find('OpenSeaDragonPage')).to.not.exist
  })

  it('Renders a <OpenSeaDragonPage/> component when "detail" is in url', () =>{
    _component = shallow(<Page data={ _data } params={ _paramsDetail } />)
    expect(_component.find('OpenSeaDragonPage')).to.exist
    expect(_component.find('ContentPage')).to.not.exist
  })

})
