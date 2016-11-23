import inIframe from '../modules/inIframe.js'
import Logo from './assets/library.logo.png'
export const logo = Logo

let colors = {
  background1: '#F0F0E1',
  background2: '#444',
  primary1: '#656557',
  primary2: '#444',
  secondary1: '',
  secondary2: ''
}
if (inIframe()) {
  colors = {
    background1: '#333',
    background2: '#444',
    primary1: 'white',
    primary2: 'white',
    secondary1: '',
    secondary2: ''
  }
}

export { colors }

export const manifestBaseUrls = [ '//testlibnd-dave-manifests.s3.amazonaws.com/sample_data/manifests/'
]

export const whitelist = [
  'library.nd.edu'
]
