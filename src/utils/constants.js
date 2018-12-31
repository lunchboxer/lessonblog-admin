export const APPNAME = 'Orchard English'

export const APIURL = (process.env.NODE_ENV === 'development')
  ? 'http://192.168.1.9:3030'
  : 'https://orchard.openode.io/'
