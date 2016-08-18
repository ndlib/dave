'use strict'
import React, { Component, PropTypes } from 'react';
import OneUpView from '../OneUpView'
import TwoUpView from '../TwoUpView'
import GridView from '../GridView'

class CurrentView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    switch(this.props.params.view) {
      case "1":
        return (
          <OneUpView
            data={ this.props.data }
            params={ this.props.params }
          />
         );
        break;
      case "2":
        return (
          <TwoUpView
            data={ this.props.data }
            params={ this.props.params }
          />
         );
        break;
      default:
        return (
          <GridView
            data={ this.props.data }
            params={ this.props.params }
          />
         );
        break;
    }
  }
}

CurrentView.propTypes = {
  data: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default CurrentView;
