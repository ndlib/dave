'use strict'
import React, { Component, PropTypes } from 'react';
import classes from './Metadata.scss';

class Metadata extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div className={ classes.content }>Metadata</div> 
     );
  }
}

export default Metadata;
