export const APPNAME = 'Orchard English'

export const APIURL = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:3030'
  : 'https://kumu.openode.io/'
