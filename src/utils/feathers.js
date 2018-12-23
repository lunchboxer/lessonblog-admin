import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import { CookieStorage } from 'cookie-storage'
import { APIURL } from './constants'

const socket = io(APIURL)
const client = feathers()

client.configure(socketio(socket, { timeout: 10000 }))
client.configure(auth({ storage: new CookieStorage() }))

export default client
