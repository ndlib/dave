import React from 'react'
import DigitalArtifact from './DigitalArtifact'
import Metadata from './Metadata'
import Branding from './Branding'
import classes from './Page.scss'
import '../../styles/core.scss'

export const Page = ({ children }) => (
  <div className='container text-center'>
    <DigitalArtifact />
    <Metadata />
    <Branding />
  </div>
)

export default Page
