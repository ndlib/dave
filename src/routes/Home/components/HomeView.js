import React from 'react'
import { Link } from 'react-router'
import { FontIcon, Toolbar, ToolbarGroup } from 'material-ui'
import Branding from '../../../components/Branding/'
import classes from './HomeView.scss'

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
      <h2>Digital Artifact Viewing Experience</h2>
    </div>
    <div className={classes.description}>
      <h3>About D.a.v.e.</h3>
      <p>The Digital Artifact Viewing Experience or <span className={classes.smCap}>"D.a.v.e."</span> for short, is a viewing experience built using React and Redux. It reads IIIF Manifest files and creates a unique viewing experience based on the JSON data. Dave is being developed by the <i>Web and Software Engineering</i> and <i>Digital Library Technologies</i> groups at the <a href='http://library.nd.edu'>Hesburgh Library at Notre Dame</a>.</p>
    </div>
    <div className={classes.description}>
      <h3>Testing D.a.v.e.</h3>
      <p><Link to='/x/manifest-1/0/2/0'>Test url</Link></p>
    </div>
    <Branding />
  </div>
)

export default HomeView
