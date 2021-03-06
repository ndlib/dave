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
if (location.search.includes('collections.library.nd.edu') ||
location.search.includes('localhost:3018')) {
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

export const manifestBaseUrls = [ 'https://raw.githubusercontent.com/ndlib/dave_manifests/master/manifests/'
]

export const whitelist = [
  'library.nd.edu',
  'localhost:3018'
]
