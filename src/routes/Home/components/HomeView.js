import React from 'react'
import { Link } from 'react-router'
import { FontIcon, Toolbar, ToolbarGroup } from 'material-ui'
import Branding from '../../../components/Branding/'
import classes from './HomeView.scss'

const fancyIconStyle = {
  color: '#e28d05',
  fontSize: '72px'
}
export const HomeView = () => (
  <div>
    <Toolbar style={{backgroundColor: 'black'}}>
      <ToolbarGroup firstChild>
        <FontIcon
          className='material-icons'
          style={{
            color: '#61dafb',
            fontSize: '48px',
            lineHeight: '56px'
          }}
        >local_activity</FontIcon>
        <div className={classes.toolbarTitle}>D.a.v.e.</div>
      </ToolbarGroup>
      <ToolbarGroup lastChild>
        <div className={classes.toolbarLink}>
          <a href='https://github.com/ndlib/dave'>GitHub</a>
        </div>
      </ToolbarGroup>
    </Toolbar>
    <div className={classes.hero}>
      <h1>D.a.v.e.</h1>
      <h2>The Digital Artifact Viewing Experience</h2>
    </div>
    <div className={classes.body}>
      <div className={classes.description}>
        <div className={classes.fancyIcon}>
          <FontIcon
            className='material-icons'
            style={fancyIconStyle}
          >chrome_reader_mode</FontIcon>
        </div>
        <h3>What is D.a.v.e.?</h3>
        <p>
          The Digital Artifact Viewing Experience, or
          <span className={classes.smCap}>D.a.v.e.</span> for short, is a
          viewing experience built using&nbsp;
          <a href='https://facebook.github.io/react/'>React</a> &nbsp;and&nbsp;
          <a href='http://redux.js.org/'>Redux</a>. It reads IIIF Manifest files
          and creates a unique viewing experience based on the JSON data.
        </p>
        <p>
          Dave is being developed by the <i>Web and Software Engineering</i> and
          <i>Digital Library Technologies</i> groups at the&nbsp;
          <a href='http://library.nd.edu'>Hesburgh Library at Notre Dame</a>.
        </p>
      </div>
      <div className={classes.description}>
        <div className={classes.fancyIcon}>
          <FontIcon
            className='material-icons'
            style={fancyIconStyle}
          >link</FontIcon>
        </div>
        <h3>Testing</h3>
        <p>
          So how does <span className={classes.smCap}>D.a.v.e.</span> work?
          Obviously this page probably isn't what you were expecting.
          <span className={classes.smCap}>D.a.v.e.</span> uses the url to
          determine the following:
        </p>
        <ul>
          <li>Referring Source</li>
          <li>Manifest file to use</li>
          <li>Current sequence of the manifest</li>
          <li>Current view type of the manifest</li>
          <li>Current page of the manifest</li>
          <li>Whether or not it should be zoomable</li>
        </ul>
        <p>An example link is here: <Link to='/x/manifest-1/0/2/0'>Demo</Link>.</p>
      </div>
      <div className={classes.description}>
        <div className={classes.fancyIcon}>
          <FontIcon
            className='material-icons'
            style={fancyIconStyle}
          >copyright</FontIcon>
        </div>
        <h3>Licensing</h3>
        <p>
          <span className={classes.smCap}>D.a.v.e.</span> is Copyright 2016 by
          the University of Notre Dame. It is an open source project released under an&nbsp;
          <a href='http://www.apache.org/licenses/LICENSE-2.0'>Apache 2 license</a>.
        </p>
      </div>
    </div>
    <Branding />
  </div>
)

export default HomeView
