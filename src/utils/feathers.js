import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import { CookieStorage } from 'cookie-storage'
import { APIURL } from './constants'
import rx from 'feathers-reactive'

const socket = io(APIURL)
const client = feathers()

client.configure(socketio(socket, { timeout: 10000 }))
client.configure(rx({ idField: '_id' }))
client.configure(auth({ storage: new CookieStorage() }))

export default client
